import React, { useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import './TeamCalendar.css';
import axios from 'axios';


const TeamCalendar = ({ teamId, memberId }) => {
  const [events, setEvents] = useState([]);

  // 서버에서 팀의 일정을 가져오기
  useEffect(() => {
    const fetchTeamEvents = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/calendar/team/${teamId}/events`, {
          params: { memberId },
        });
        setEvents(
          response.data.map((event) => ({
            id: event.id,
            title: event.title,
            start: event.startDate,
            end: event.endDate,
            allDay: event.allDay,
            color: event.color,
          }))
        );
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };
    fetchTeamEvents();
  }, [teamId, memberId]);

  return (
    <div className="App team-calendar">
      <FullCalendar
        defaultView="dayGridMonth"
        plugins={[dayGridPlugin]}
        locale="ko"
        headerToolbar={{
          start: 'today',
          center: 'title',
          end: 'prev,next',
        }}
        dayCellContent={(e) => e.dayNumberText.replace(/[^0-9]/g, '')}// 날짜 숫자만 나오도록
        aspectRatio={1.5} // 캘린더 너비 높이 조정

      />
    </div>
  );
};

export default TeamCalendar;
