import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import './TeamCalendar.css';

const TeamCalendar = () => {
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
