import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./MyCalendar.css";
import moment from "moment";
import axios from "axios";

const MyCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [allEvents, setAllEvents] = useState([]);
  const [dailyEvents, setDailyEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        // 직접 API URL 작성 (memberId 값을 대체하여 사용)
        const currentMemberId = localStorage.getItem("memberId"); // 사용자 ID 가져오기
        const apiUrl = `http://localhost:8080/calendar/user/${currentMemberId}/events`; // API URL

        // API 호출
        const response = await axios.get(apiUrl, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`, // JWT 토큰 포함
          },
        });

        // 이벤트 데이터 저장
        setAllEvents(response.data);
      } catch (error) {
        console.error("이벤트를 가져오는 중 오류 발생:", error);
        alert("일정을 가져오는 데 실패했습니다. 다시 시도해주세요.");
      }
    };

    fetchEvents();
  }, []);

  useEffect(() => {
    const filteredEvents = allEvents.filter((event) => {
      const eventDate = moment(event.startDate).format("YYYY-MM-DD");
      const selectedFormatted = moment(selectedDate).format("YYYY-MM-DD");
      return eventDate === selectedFormatted;
    });

    setDailyEvents(filteredEvents);
  }, [selectedDate, allEvents]);

  const renderTileContent = ({ date }) => {
    const dateString = moment(date).format("YYYY-MM-DD");
    const hasEvent = allEvents.some(
      (event) => moment(event.startDate).format("YYYY-MM-DD") === dateString
    );

    if (hasEvent) {
      return (
        <div className="event-dots">
          <div className="event-dot" style={{ backgroundColor: "blue" }}></div>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="my-calendar">
      <h2>내 일정</h2>
      <Calendar
        onChange={setSelectedDate}
        value={selectedDate}
        locale="ko-KR"
        nextLabel=">"
        prevLabel="<"
        calendarType="gregory"
        formatDay={(locale, date) => moment(date).format("D")}
        tileContent={renderTileContent}
      />
      <div className="calendar-event-list">
        <h3>
          {selectedDate.getMonth() + 1}월 {selectedDate.getDate()}일 일정
        </h3>
        {dailyEvents.length > 0 ? (
          dailyEvents.map((event) => (
            <div
              key={event.id}
              className="event-item"
              style={{ borderLeft: `4px solid ${event.color}` }}
            >
              <h4>{event.title}</h4>
              <p>
                {moment(event.startDate).format("HH:mm")} ~{" "}
                {moment(event.endDate).format("HH:mm")}
              </p>
            </div>
          ))
        ) : (
          <p>일정 없음</p>
        )}
      </div>
    </div>
  );
};

export default MyCalendar;
