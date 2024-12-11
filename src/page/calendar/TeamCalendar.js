import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { useParams, useLocation } from 'react-router-dom';
import { useAuth } from '../../global/AuthContext';
import { ROUTES } from '../../global/Links';
import apiClient from '../../api/axiosInstance';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './TeamCalendar.css';
import AddEventModal from './AddEventModal'; // AddEventModal 파일에서 가져오기
import EventModal from './EventModal'; // 새로운 확인 모달 가져오기

const TeamCalendar = () => {
    const location = useLocation();
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
                        backgroundColor: event.color,
                    })));
                }
            } catch (error) {
                console.error("서버에 연결할 수 없습니다:", error);
            }
        }
    };

    // 팀 이벤트 데이터를 로드
    useEffect(() => {
        fetchTeamEvents();
    }, [teamId]);

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
            <h1>팀 캘린더 페이지</h1>
            <p>현재 팀 ID: {teamId}</p>
            <p>로그인한 사람: {user?.nickname || user?.email}</p>
            <FullCalendar
                key={events.length}
                plugins={[dayGridPlugin, interactionPlugin]}
                locale="ko"
                headerToolbar={{
                    start: 'today',
                    center: 'title',
                    end: 'prev,next',
                }}
                events={events}
                dateClick={handleDateClick}
                eventClick={handleEventClick}
                dayCellContent={(e) => e.dayNumberText.replace(/[^0-9]/g, '')}
                aspectRatio={1.5}
            />

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
