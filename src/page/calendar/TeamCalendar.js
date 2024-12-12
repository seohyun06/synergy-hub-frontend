import React, { useState, useEffect, useRef } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../global/AuthContext';
import { ROUTES } from '../../global/Links';
import apiClient from '../../api/axiosInstance';
import Modal from 'react-bootstrap/Modal'; // Modal을 임포트
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './TeamCalendar.css';
import AddEventModal from './AddEventModal'; // AddEventModal 파일에서 가져오기
import EventModal from './EventModal'; // 새로운 확인 모달 가져오기

// 색상 옵션 정의
const COLOR_OPTIONS = [
  '#87CEEB', '#FFC0CB', '#FFA500', '#800080', '#808080', '#000080', // 기존 색상
  '#00FF00', '#FFD700', '#FF6347', '#7B68EE', '#D2691E', '#A52A2A', // 추가 색상
  '#8A2BE2', '#FF1493', '#00FA9A'  // 추가 색상
];
const TeamCalendar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const queryParams = new URLSearchParams(location.search);
    const teamId = queryParams.get("team"); // 쿼리 파라미터에서 teamId 가져오기
    console.log("팀 ID:", teamId);

    const { isLoggedIn, setIsLoggedIn, user, setUser } = useAuth(); // 로그인 상태 및 사용자 정보 상태 관리

    const [events, setEvents] = useState([]); // 캘린더에 표시될 이벤트 목록
    const [showModal, setShowModal] = useState(false); // 이벤트 삭제 모달 상태
    const [showAddModal, setShowAddModal] = useState(false); // 새 이벤트 추가/수정 모달 상태
    const [showEventModal, setShowEventModal] = useState(false); // 일정 확인 모달 상태
    const [newEvent, setNewEvent] = useState({
        title: '',
        startDate: new Date().toISOString().slice(0, 16), // 현재 날짜와 시간을 기본값으로 설정 (초 제외)
        endDate: new Date().toISOString().slice(0, 16),   // 종료 시간도 동일하게 초기화
    });
    const [eventDetails, setEventDetails] = useState(null); // 클릭한 이벤트의 세부 정보
    const [eventToDelete, setEventToDelete] = useState(null); // 삭제할 이벤트 정보
    const hasValidated = useRef(false);

    // **색상 관련 상태 및 로직 추가**
    const [showColorPicker, setShowColorPicker] = useState(false); // 색상 선택 UI 표시 상태
    const [teamColor, setTeamColor] = useState();  // 기본 색상

    // 팀 색상 조회
    const fetchTeamColor = async () => {
        try {
            const response = await apiClient.get('/member-teams/color', {
                params: { teamId },
                headers: { Authorization: `Bearer ${localStorage.getItem('accessToken')}` },
            });

            console.log('서버에서 반환된 색상:', response.data); // 응답 데이터 확인
            setTeamColor(response.data); // 서버에서 받은 색상을 상태로 설정
        } catch (error) {
            console.error('색상 조회 중 오류:', error);
        }
    };

    // 팀 색상 업데이트
    const updateTeamColor = async (newColor) => {
        try {
            const response = await apiClient.put(
                '/member-teams/color',
                { teamId, newColor },
                { headers: { Authorization: `Bearer ${localStorage.getItem('accessToken')}` } }
            );

            if (response.status === 200) {
                console.log('색상 저장 성공:', newColor);
                setTeamColor(newColor); // 상태 업데이트

                // 색상 상태가 변경된 후 이벤트 목록에 색상 적용
                setEvents((prevEvents) =>
                    prevEvents.map((event) => ({ ...event, backgroundColor: newColor }))
                );

                // 팀 색상 변경 후 모든 팀 색상 데이터를 가져옵니다.
                await fetchTeamColor();

                // 색상 변경 후 새로고침 메시지 전송
                window.postMessage({ action: 'refreshCalendar' }, '*');
                console.log('새로고침 메시지 보냄');
                setShowColorPicker(false);
            } else {
                console.error('색상 저장 실패:', response.data);
            }
        } catch (error) {
            console.error('색상 변경 중 오류 발생:', error);
        }
    };

    // 접근 권한 검증 로직 추가
    useEffect(() => {
        const validateTeamAccess = async () => {
            if (hasValidated.current) return; // 이미 검증이 완료된 경우 실행 중지
            hasValidated.current = true; // 검증 플래그 설정

            try {
                const response = await apiClient.get(`/teams/${teamId}/validate`, {
                    headers: { Authorization: `Bearer ${localStorage.getItem('accessToken')}` },
                });

                if (response.data === true) {
                    console.log("팀 접근 권한 확인됨.");
                } else {
                    alert("해당 팀에 접근할 권한이 없습니다.");
                    navigate("/"); // 홈 페이지로 리디렉션
                }
            } catch (error) {
                console.error("팀 검증 중 오류 발생:", error);
                alert("팀에 접근할 권한이 없습니다.");
                navigate("/"); // 홈 페이지로 리디렉션
            }
        };

        if (teamId) validateTeamAccess();
    }, [teamId, navigate]);

    // 팀의 이벤트 목록을 가져오는 API 호출
    const fetchTeamEvents = async () => {
        const jwtToken = localStorage.getItem("accessToken");
        if (jwtToken) {
            try {
                const response = await apiClient.get(ROUTES.GET_TEAM_EVENTS(teamId), {
                    headers: {
                        Authorization: `Bearer ${jwtToken}`, // 수정된 부분
                    },
                });

                if (response.status === 200) {
                    const teamEvents = response.data;
                    setEvents(teamEvents.map(event => ({
                        id: event.id,
                        title: event.title,
                        start: event.start,
                        end: event.end,
                        backgroundColor: teamColor, // 팀 색상을 사용
                    })));
                }
            } catch (error) {
                console.error("서버에 연결할 수 없습니다:", error);
            }
        }
    };

    // 팀 색상 및 이벤트 데이터를 로드
    useEffect(() => {
        fetchTeamColor();
        fetchTeamEvents();
    }, [teamId, teamColor]);

    // 새 이벤트 추가/수정 요청을 서버에 보내는 함수
    const handleSaveEvent = async () => {
        if (newEvent.title && newEvent.startDate && newEvent.endDate) {
            try {
                const formattedEvent = {
                    title: newEvent.title,
                    startDate: newEvent.startDate,
                    endDate: newEvent.endDate,
                };

                let response;
                if (newEvent.id) {
                    // 수정 요청
                    response = await apiClient.put(
                        ROUTES.UPDATE_EVENT(newEvent.id),
                        formattedEvent,
                        {
                            headers: {
                                Authorization: `Bearer ${localStorage.getItem('accessToken')}`, // 수정된 부분
                            },
                        }
                    );
                } else {
                    // 새 이벤트 추가 요청
                    response = await apiClient.post(
                        ROUTES.CREATE_EVENT(teamId),
                        formattedEvent,
                        {
                            headers: {
                                Authorization: `Bearer ${localStorage.getItem('accessToken')}`, // 수정된 부분
                            },
                        }
                    );
                }

                if (response.status === 200 || response.status === 201) {
                    await fetchTeamEvents();
                    setShowAddModal(false);

                    // MyCalendar에 새로고침 메시지 전송
                    window.postMessage({ action: 'refreshCalendar' }, '*');
                    console.log('MyCalendar에 새로고침 메시지 보냄');
                }
            } catch (error) {
                console.error("서버에 연결할 수 없습니다:", error);
            }
        }
    };

    // 날짜 클릭 시 새 이벤트 추가 모달을 열기 위한 핸들러
    const handleDateClick = (arg) => {
        setNewEvent({
            title: '',
            startDate: `${arg.dateStr}T00:00`, // 수정된 부분
            endDate: `${arg.dateStr}T01:00`,   // 수정된 부분
        });
        setShowAddModal(true); // 새 이벤트 추가 모달 열기
    };

    // 이벤트 클릭 시 일정 확인 모달 열기
    const handleEventClick = (arg) => {
        setEventDetails({
            id: arg.event.id,
            title: arg.event.title,
            start: arg.event.start,
            end: arg.event.end,
        });
        setShowEventModal(true); // 일정 확인 모달 열기
    };

    // 수정 버튼 클릭 핸들러
    const handleEditEvent = () => {
        setNewEvent(eventDetails); // 수정할 이벤트를 newEvent에 설정
        setShowEventModal(false); // 일정 확인 모달 닫기
        setShowAddModal(true); // 수정 모달 열기
    };

    // 삭제 버튼 클릭 핸들러
    const handleDeleteEvent = async () => {
        if (eventDetails) {
            try {
                const response = await apiClient.delete(
                    ROUTES.DELETE_EVENT(eventDetails.id),
                    {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem('accessToken')}`, // 수정된 부분
                        },
                    }
                );

                if (response.status === 204) {
                    await fetchTeamEvents(); // 최신 이벤트 목록을 다시 가져옵니다.
                    setShowEventModal(false);
                    setEventDetails(null);

                    // MyCalendar 페이지 새로고침 트리거
                    window.postMessage({ action: 'refreshCalendar' }, '*');
                    console.log('MyCalendar에 새로고침 메시지 보냄');
                }
            } catch (error) {
                console.error("서버에 연결할 수 없습니다:", error);
            }
        }
    };

    return (
        <div className="App team-calendar">
            <FullCalendar
                key={events.length}
                plugins={[dayGridPlugin, interactionPlugin]}
                locale="ko"
                headerToolbar={{
                    start: 'today',
                    center: 'title',
                    end: 'prev,next customColorButton',
                }}
                events={events}
                dateClick={handleDateClick}
                eventClick={handleEventClick}
                dayCellContent={(e) => e.dayNumberText.replace(/[^0-9]/g, '')}
                aspectRatio={1.5}
                customButtons={{
                    customColorButton: {
                        text: '색상 변경',
                        click: () => setShowColorPicker(true),
                    },
                }}
                eventContent={(eventInfo) => {
                    return (
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            {/* 동그란 색상 표시 */}
                            <span
                                style={{
                                    width: '10px',
                                    height: '10px',
                                    borderRadius: '50%',
                                    backgroundColor: eventInfo.event.backgroundColor,
                                    marginRight: '5px',
                                }}
                            />
                            {/* 일정 이름만 표시 */}
                            <span>{eventInfo.event.title}</span>
                        </div>
                    );
                }}
            />

            {/* 색상 변경 모달 */}
            <Modal show={showColorPicker} onHide={() => setShowColorPicker(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title>색상 선택</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {COLOR_OPTIONS.map((color) => (
                        <button
                            key={color}
                            style={{
                                backgroundColor: color,
                                border: color === teamColor ? '2px solid black' : 'none',
                                padding: '10px',
                                margin: '5px',
                                cursor: 'pointer',
                            }}
                            onClick={() => updateTeamColor(color)}
                        />
                    ))}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowColorPicker(false)}>
                        취소
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* 새 이벤트 추가/수정 모달 */}
            <AddEventModal
                show={showAddModal}
                onHide={() => setShowAddModal(false)}
                newEvent={newEvent}
                setNewEvent={setNewEvent}
                handleSaveEvent={handleSaveEvent}
                isEdit={!!newEvent.id}
            />

            {/* 일정 확인 모달 */}
            <EventModal
                show={showEventModal}
                onHide={() => setShowEventModal(false)}
                eventDetails={eventDetails}
                onEdit={handleEditEvent}
                onDelete={handleDeleteEvent}
            />
        </div>
    );
};

export default TeamCalendar;
