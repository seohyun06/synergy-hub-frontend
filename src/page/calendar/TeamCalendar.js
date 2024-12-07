import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { useParams } from 'react-router-dom';
import { useAuth } from '../../global/AuthContext';
import { ROUTES } from '../../global/Links';
import apiClient from '../../api/axiosInstance';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './TeamCalendar.css';
import AddEventModal from './AddEventModal'; // AddEventModal 파일에서 가져오기

const TeamCalendar = () => {
    // 팀 ID와 로그인된 사용자 정보를 가져오기 위한 hooks
    const { id } = useParams();  // URL에서 팀 ID 추출
    const { isLoggedIn, setIsLoggedIn, user, setUser } = useAuth();  // 로그인 상태 및 사용자 정보 상태 관리

    // 상태 관리: 이벤트 목록, 모달 표시 여부, 새 이벤트 정보 등
    const [events, setEvents] = useState([]);  // 캘린더에 표시될 이벤트 목록
    const [showModal, setShowModal] = useState(false);  // 이벤트 삭제 모달 상태
    const [showAddModal, setShowAddModal] = useState(false);  // 새 이벤트 추가 모달 상태
    const [newEvent, setNewEvent] = useState({ title: '', startDate: '', endDate: '' });  // 새 이벤트 정보
    const [eventToDelete, setEventToDelete] = useState(null);  // 삭제할 이벤트 정보

    // 사용자 정보 요청 API 호출
    useEffect(() => {
        const fetchMemberInfo = async () => {
            const jwtToken = localStorage.getItem("accessToken");
            if (jwtToken) {
                try {
                    const response = await fetch(ROUTES.GETMEMBER.link, {
                        headers: {
                            Authorization: `Bearer ${jwtToken}`,  // JWT 토큰을 Authorization 헤더에 포함
                        },
                    });

                    if (response.ok) {
                        const apiResponse = await response.json();
                        const memberData = apiResponse.payload;
                        setUser({
                            email: memberData.email,
                            nickname: memberData.nickname,
                            profileImageUrl: memberData.profileImageUrl,
                        });
                        setIsLoggedIn(true);  // 로그인 상태 업데이트
                    } else {
                        console.error("회원정보 요청 오류:", response.status);
                    }
                } catch (error) {
                    console.error("서버에 연결할 수 없습니다:", error);
                }
            }
        };

        fetchMemberInfo();
    }, [setUser, setIsLoggedIn]);

    // 팀의 이벤트 목록을 가져오는 API 호출
    useEffect(() => {
        const fetchTeamEvents = async () => {
            const jwtToken = localStorage.getItem("accessToken");
            if (jwtToken) {
                try {
                    const response = await apiClient.get(ROUTES.GET_TEAM_EVENTS(id), {
                        headers: {
                            Authorization: `Bearer ${jwtToken}`,  // JWT 토큰을 Authorization 헤더에 포함
                        },
                    });

                    if (response.status === 200) {
                        const teamEvents = response.data;
                        // 이벤트 데이터를 캘린더에 맞게 변환하여 상태 업데이트
                        setEvents(teamEvents.map(event => ({
                            id: event.id,
                            title: event.title,
                            start: event.startDate,
                            end: event.endDate,
                            backgroundColor: event.color,
                        })));
                    } else {
                        console.error("팀 이벤트 요청 오류:", response.status);
                    }
                } catch (error) {
                    console.error("서버에 연결할 수 없습니다:", error);
                }
            }
        };

        fetchTeamEvents();
    }, [id]);  // 팀 ID가 변경될 때마다 이벤트 목록을 새로 가져옴

    // 날짜 클릭 시 새 이벤트 추가 모달을 열기 위한 핸들러
    const handleDateClick = (arg) => {
        setNewEvent({ ...newEvent, startDate: arg.dateStr });
        setShowAddModal(true);  // 새 이벤트 추가 모달 열기
    };

    // 새 이벤트 추가 요청을 서버에 보내는 함수
    const handleAddEvent = async () => {
        if (newEvent.title && newEvent.startDate && newEvent.endDate) {
            try {
                const formattedEvent = {
                    ...newEvent,
                    startDate: new Date(newEvent.startDate).toISOString(),
                    endDate: new Date(newEvent.endDate).toISOString()
                };

                const response = await apiClient.post(
                    ROUTES.CREATE_EVENT(id),
                    formattedEvent,
                    {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,  // JWT 토큰을 Authorization 헤더에 포함
                        },
                    }
                );

                if (response.status === 201) {
                    const createdEvent = response.data;
                    // 서버에서 생성된 이벤트를 상태에 추가
                    setEvents([...events, {
                        id: createdEvent.id,
                        title: createdEvent.title,
                        start: createdEvent.startDate,
                        end: createdEvent.endDate,
                        allDay: createdEvent.allDay,
                        backgroundColor: createdEvent.color,
                    }]);
                    setShowAddModal(false);  // 새 이벤트 추가 후 모달 닫기
                } else {
                    console.error("이벤트 생성 오류:", response.status);
                }
            } catch (error) {
                console.error("서버에 연결할 수 없습니다:", error);
            }
        }
    };

    // 이벤트 클릭 시 삭제 확인 모달을 표시하기 위한 핸들러
    const handleEventClick = (arg) => {
        setShowModal(true);  // 이벤트 삭제 모달 열기
        setEventToDelete(arg.event);  // 삭제할 이벤트 저장
    };

    // 이벤트 삭제를 확인하고 서버에 요청하는 함수
    const confirmDelete = async () => {
        if (eventToDelete) {
            try {
                const response = await apiClient.delete(
                    ROUTES.DELETE_EVENT(eventToDelete.id),
                    {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,  // JWT 토큰을 Authorization 헤더에 포함
                        },
                    }
                );

                if (response.status === 204) {
                    // 서버에서 삭제가 완료되면 상태에서 해당 이벤트를 제거
                    setEvents((prevEvents) => prevEvents.filter((event) => event.id !== eventToDelete.id));
                    setShowModal(false);  // 삭제 후 모달 닫기
                    setEventToDelete(null);
                } else {
                    console.error("이벤트 삭제 오류:", response.status);
                }
            } catch (error) {
                console.error("서버에 연결할 수 없습니다:", error);
            }
        }
    };

    // 삭제 취소 시 모달을 닫고 상태 초기화
    const cancelDelete = () => {
        setShowModal(false);  // 삭제 모달 닫기
        setEventToDelete(null);  // 삭제 이벤트 초기화
    };

    // 새 이벤트 입력값 변경 처리 함수
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewEvent({ ...newEvent, [name]: value });
    };

    // 디버깅용 로그 출력
    console.log('현재 팀 ID:', id);
    console.log('로그인 상태:', isLoggedIn);
    console.log('로그인된 사용자 정보:', user);

    // 로그인되지 않은 경우, 로그인 필요 메시지 출력
    if (!isLoggedIn) {
        return <p>로그인이 필요합니다.</p>;
    }

    return (
        <div className="App team-calendar">
            <h1>팀 캘린더 페이지</h1>
            <p>현재 팀 ID: {id}</p>
            <p>로그인한 사람: {user?.nickname || user?.email}</p> {/* 로그인한 사용자 정보 표시 */}
            <FullCalendar
                plugins={[dayGridPlugin, interactionPlugin]}  // FullCalendar 플러그인 설정
                locale="ko"  // 한국어로 표시
                headerToolbar={{
                    start: 'today',
                    center: 'title',
                    end: 'prev,next',
                }}
                events={events}  // 캘린더에 표시할 이벤트 목록
                dateClick={handleDateClick}  // 날짜 클릭 시 새 이벤트 추가 모달 표시
                eventClick={handleEventClick}  // 이벤트 클릭 시 삭제 확인 모달 표시
                dayCellContent={(e) => e.dayNumberText.replace(/[^0-9]/g, '')}  // 날짜에 숫자만 표시
                aspectRatio={1.5}  // 캘린더의 비율 설정
            />

            {/* 새 이벤트 추가 모달 */}
            <AddEventModal
                show={showAddModal}
                onHide={() => setShowAddModal(false)}  // 모달 닫기
                newEvent={newEvent}
                setNewEvent={setNewEvent}
                handleAddEvent={handleAddEvent}  // 새 이벤트 추가 함수 전달
            />

            {/* 이벤트 삭제 확인 모달 */}
            <Modal show={showModal} onHide={cancelDelete}>
                <Modal.Header closeButton>
                    <Modal.Title>이벤트 삭제 확인</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {eventToDelete && (
                        <p>이 이벤트를 삭제하시겠습니까? <strong>{eventToDelete.title}</strong></p>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={cancelDelete}>취소</Button>
                    <Button variant="danger" onClick={confirmDelete}>삭제</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default TeamCalendar;