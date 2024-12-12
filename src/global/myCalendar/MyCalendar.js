import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./MyCalendar.css";
import moment from "moment";
import axios from "axios";
import { ROUTES } from '../../global/Links';

const MyCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date()); // 선택된 날짜 상태
  const [allEvents, setAllEvents] = useState([]); // 모든 이벤트 데이터
  const [dailyEvents, setDailyEvents] = useState([]); // 선택된 날짜의 이벤트
  const [teamColors, setTeamColors] = useState({});

const fetchTeamColors = async () => {
    try {
        const response = await axios.get(ROUTES.GET_TEAM_COLORS, {
            headers: { Authorization: `Bearer ${localStorage.getItem('accessToken')}` },
        });

        console.log("가져온 팀 색상 데이터:", response.data); // 디버깅을 위한 출력
        setTeamColors(response.data); // 서버에서 가져온 색상 데이터 저장
    } catch (error) {
        console.error('색상 데이터를 가져오는 중 오류 발생:', error);
    }
};



  // 이벤트 데이터를 가져오는 함수
  const fetchEvents = async () => {
    try {
      const apiUrl = ROUTES.GET_USER_EVENTS;
      const response = await axios.get(apiUrl, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`, // JWT 인증 토큰
        },
      });

      console.log("가져온 이벤트 데이터:", response.data);
      setAllEvents(response.data); // 가져온 이벤트 데이터 설정
    } catch (error) {
      console.error("이벤트를 가져오는 중 오류 발생:", error);
      alert("일정을 가져오는 데 실패했습니다. 다시 시도해주세요.");
    }
  };

  // 초기 이벤트 데이터 가져오기
  useEffect(() => {
    fetchEvents();
    fetchTeamColors();
  }, []);

  // 선택된 날짜의 이벤트 필터링
useEffect(() => {
  const filteredEvents = allEvents.filter((event) => {
    const eventStartDate = moment(new Date(event.startDate[0], event.startDate[1] - 1, event.startDate[2]));
    const eventEndDate = moment(new Date(event.endDate[0], event.endDate[1] - 1, event.endDate[2]));
    const selectedFormatted = moment(selectedDate).format('YYYY. MM. DD.');

    // 선택된 날짜가 이벤트 기간 내에 포함되는지 확인
    return selectedFormatted >= eventStartDate.format('YYYY. MM. DD.') && selectedFormatted <= eventEndDate.format('YYYY. MM. DD.');
  });

  setDailyEvents(filteredEvents); // 필터링된 이벤트 데이터 설정
}, [selectedDate, allEvents]);

  // 캘린더 타일에 표시할 내용 렌더링
const renderTileContent = ({ date }) => {
  const dateString = moment(date).format('YYYY-MM-DD');

  // 해당 날짜에 맞는 이벤트 필터링 (startDate와 endDate를 모두 고려)
  const eventsForDate = allEvents.filter((event) => {
    const eventStartDate = moment(new Date(event.startDate[0], event.startDate[1] - 1, event.startDate[2]));
    const eventEndDate = moment(new Date(event.endDate[0], event.endDate[1] - 1, event.endDate[2]));


    // 날짜가 이벤트의 시작일과 종료일 사이에 있는지 확인
    return dateString >= eventStartDate.format('YYYY-MM-DD') && dateString <= eventEndDate.format('YYYY-MM-DD');
  });

  // 필터링된 이벤트가 있을 경우 색상 도트 표시
  if (eventsForDate.length > 0) {
    const eventColors = eventsForDate.map((event) => event.color); // 이벤트 색상 사용

    return (
      <div className="event-dots">
        {eventColors.map((color, index) => (
          <div
            key={index}
            className="event-dot"
            style={{ backgroundColor: color }} // 이벤트의 color를 배경색으로 적용
          ></div>
        ))}
      </div>
    );
  }

  return null;
};






  // MyCalendar에서 새로고침 메시지 수신
useEffect(() => {
    const handleMessage = (event) => {
        if (event.data.action === 'refreshCalendar') {
            console.log('캘린더 새로고침 메시지 수신');
            fetchEvents(); // 새로 이벤트 데이터를 가져옵니다.
            fetchTeamColors(); // 색상 데이터를 다시 불러옵니다.
        }
    };

    window.addEventListener('message', handleMessage);

    // 컴포넌트가 언마운트될 때 이벤트 리스너를 정리
    return () => {
        window.removeEventListener('message', handleMessage);
    };
}, []);

// 날짜가 일요일 또는 토요일인지 확인하는 함수
const tileClassName = ({ date }) => {
  const dayOfWeek = date.getDay();
  if (dayOfWeek === 0) {
    return 'react-calendar__tile--sunday'; // 일요일인 경우
  } else if (dayOfWeek === 6) {
    return 'react-calendar__tile--saturday'; // 토요일인 경우
  }
  return ''; // 그 외의 날짜는 기본 클래스
};


  return (
    <div className="my-calendar">
      <h2>내 일정</h2>
      <Calendar
        onChange={setSelectedDate} // 날짜 선택 시 상태 변경
        value={selectedDate} // 현재 선택된 날짜
        locale="ko-KR" // 한국어 설정
        nextLabel=">" // 다음 월 버튼
        prevLabel="<" // 이전 월 버튼
        calendarType="gregory" // 양력 캘린더
        formatDay={(locale, date) => moment(date).format("D")} // 날짜 포맷
        tileContent={renderTileContent} // 타일에 이벤트 표시
        tileClassName={tileClassName} // 일요일과 토요일에 클래스를 추가
      />
      <div className="calendar-event-list">
        <h3>
          {selectedDate.getMonth() + 1}월 {selectedDate.getDate()}일 일정
        </h3>
        {dailyEvents.length > 0 ? (
          dailyEvents.map((event) => {
            const startDateObj = new Date(event.startDate[0], event.startDate[1] - 1, event.startDate[2], event.startDate[3], event.startDate[4]);
            const endDateObj = new Date(event.endDate[0], event.endDate[1] - 1, event.endDate[2], event.endDate[3], event.endDate[4]);

            return (
              <div
                key={event.id}
                className="event-item"
                style={{ borderLeft: `4px solid ${event.color}` }}
              >
                <h4>{event.title}</h4>
                <p>팀: {event.teamName}</p> {/* 팀 이름 표시 */}
                <p>
                  일정 시작: {moment(startDateObj).format("YYYY-MM-DD HH:mm")}
                </p>
                <p>
                  일정 마감: {moment(endDateObj).format("YYYY-MM-DD HH:mm")}
                </p>
              </div>
            );
          })
        ) : (
          <p>일정 없음</p>
        )}
      </div>

    </div>
  );
};

export default MyCalendar;
