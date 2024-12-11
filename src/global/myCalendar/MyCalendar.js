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

  // 초기 이벤트 데이터 가져오기
  useEffect(() => {
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

    fetchEvents(); // API 호출
  }, []);

  // 선택된 날짜의 이벤트 필터링
  useEffect(() => {
    const filteredEvents = allEvents.filter((event) => {
      // startDate 배열을 Date 객체로 변환하고, moment로 포맷팅
      const startDateObj = new Date(event.startDate[0], event.startDate[1] - 1, event.startDate[2]);
      const eventDate = moment(startDateObj).format('YYYY. MM. DD.');

      const selectedFormatted = moment(selectedDate).format('YYYY. MM. DD.');

      console.log("이벤트 날짜:", eventDate);
      console.log("선택된 날짜:", selectedFormatted);

      return eventDate === selectedFormatted; // 날짜가 일치하는 이벤트만 필터링
    });

    setDailyEvents(filteredEvents); // 필터링된 데이터 설정
  }, [selectedDate, allEvents]);

  const renderTileContent = ({ date }) => {
    const dateString = moment(date).format('YYYY. MM. DD.');

    // 해당 날짜에 도트를 표시할 이벤트를 찾기
    const event = allEvents.find((event) => {
      // startDate 배열을 Date 객체로 변환
      const startDateObj = new Date(event.startDate[0], event.startDate[1] - 1, event.startDate[2], event.startDate[3], event.startDate[4]);
      const endDateObj = new Date(event.endDate[0], event.endDate[1] - 1, event.endDate[2], event.endDate[3], event.endDate[4]);

      // 이벤트가 해당 날짜 범위 내에 있는지 확인
      const eventStartDate = moment(startDateObj).format('YYYY. MM. DD.');
      const eventEndDate = moment(endDateObj).format('YYYY. MM. DD.');

      return moment(date).isBetween(eventStartDate, eventEndDate, 'day', '[]'); // 날짜 범위 내에 포함되는지 확인
    });

    if (event) {
      return (
        <div className="event-dots">
          <div
            className="event-dot"
            style={{ backgroundColor: event.color || "blue" }}  // color 값에 따라 색상 설정
          ></div>
        </div>
      );
    }

    return null; // 이벤트가 없는 경우 표시하지 않음
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
      />
      <div className="calendar-event-list">
        <h3>
          {selectedDate.getMonth() + 1}월 {selectedDate.getDate()}일 일정
        </h3>
        {dailyEvents.length > 0 ? (
          dailyEvents.map((event) => {
            // startDate 배열을 Date 객체로 변환
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
