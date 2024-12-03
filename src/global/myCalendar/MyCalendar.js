import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./MyCalendar.css";
import moment from "moment";
import axios from "axios";

const MyCalendar = ({ memberId }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [events, setEvents] = useState([]);
  const [dailyEvents, setDailyEvents] = useState([]);


  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(`/user/${memberId}/events`);
        setEvents(response.data);
      } catch (error) {
        console.error("Failed to fetch events", error);
      }
    };

    fetchEvents();
  }, [memberId]);


  useEffect(() => {
    const filteredEvents = events.filter((event) =>
      moment(event.startDate).isSame(selectedDate, "day")
    );
    setDailyEvents(filteredEvents);
  }, [selectedDate, events]);


  const renderTileContent = ({ date }) => {
    const dayEvents = events.filter((event) =>
      moment(event.startDate).isSame(date, "day")
    );

    return dayEvents.length > 0 ? (
      <div className="event-dots">
        {dayEvents.map((event, index) => (
          <span
            key={index}
            className="event-dot"
            style={{ backgroundColor: event.color }}
          ></span>
        ))}
      </div>
    ) : null;
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
        tileContent={renderTileContent} // 동그라미 표시
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
