import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./MyCalendar.css";
import moment from "moment";
import axios from "axios";

const MyCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date()); // 선택된 날짜 상태
  const [allEvents, setAllEvents] = useState([]); // 모든 이벤트 데이터
  const [dailyEvents, setDailyEvents] = useState([]); // 선택된 날짜의 이벤트

  // 이벤트 데이터를 가져오는 함수
  const fetchEvents = async () => {
    try {
      const apiUrl = `http://localhost:8080/calendar/my-events`;
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
  }, []);

  // 선택된 날짜의 이벤트 필터링
  useEffect(() => {
    const filteredEvents = allEvents.filter((event) => {
      const startDateObj = new Date(event.startDate[0], event.startDate[1] - 1, event.startDate[2]);
      const eventDate = moment(startDateObj).format('YYYY. MM. DD.');

      const selectedFormatted = moment(selectedDate).format('YYYY. MM. DD.');

      return eventDate === selectedFormatted; // 날짜가 일치하는 이벤트만 필터링
    });

    setDailyEvents(filteredEvents); // 필터링된 데이터 설정
  }, [selectedDate, allEvents]);

  // 캘린더 타일에 표시할 내용 렌더링
  const renderTileContent = ({ date }) => {
    const dateString = moment(date).format('YYYY. MM. DD.');
    const hasEvent = allEvents.some((event) => {
      const startDateObj = new Date(event.startDate[0], event.startDate[1] - 1, event.startDate[2], event.startDate[3], event.startDate[4]);
      return moment(startDateObj).format('YYYY. MM. DD.') === dateString;
    });

    if (hasEvent) {
      return (
        <div className="event-dots">
          <div className="event-dot" style={{ backgroundColor: "blue" }}></div>
        </div>
      );
    }

    return null; // 이벤트가 없는 경우 표시하지 않음
  };

  // MyCalendar에서 새로고침 메시지 수신
  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data.action === 'refreshCalendar') {
        console.log('캘린더 새로고침 메시지 수신');
        fetchEvents(); // 새로 이벤트 데이터를 가져옵니다.
      }
    };

    window.addEventListener('message', handleMessage);

    // 컴포넌트가 언마운트될 때 이벤트 리스너를 정리
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

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
                <p>
                  {moment(startDateObj).format("HH:mm")} ~ {moment(endDateObj).format("HH:mm")}
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
