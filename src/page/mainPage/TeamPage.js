import React from "react";
import { useSearchParams } from "react-router-dom";
import TeamCalendar from "../calendar/TeamCalendar";
import NoticePage from "../notice/NoticePage";
import ChatRoom4 from "../chat/ChatRoom4"; // 채팅방 컴포넌트 가져오기
import "./TeamPage.css";

const TeamPage = () => {
  const [searchParams] = useSearchParams();
  const teamId = searchParams.get("team"); // 쿼리 파라미터에서 'team' 값을 가져옴

  return (
    <div className="combined-page-container">
      {/* 왼쪽 섹션 */}
      <div className="left-container">
        <div className="team-calendar-container">
          <TeamCalendar teamId={teamId} />
        </div>
        <div className="notice-page-container">
          <NoticePage teamId={teamId} />
        </div>
      </div>

      {/* 오른쪽 섹션: 채팅방 */}
      <div className="right-container">
        <ChatRoom4 teamId={teamId} />
      </div>
    </div>
  );
};

export default TeamPage;
