import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';  // 경로 탐색을 위한 훅 추가
import { ROUTES } from '../../routes';
import './Sidebar.css';

function Sidebar() {
  const [activeMenu, setActiveMenu] = useState(ROUTES.HOME);  // 활성 메뉴 상태
  const navigate = useNavigate();
  const location = useLocation();  // 현재 경로 가져오기

  // teamId 추출
  const searchParams = new URLSearchParams(location.search);
  const teamId = searchParams.get("team");  // 현재 팀 ID 가져오기

  const handleMenuClick = (route) => {
    const targetRoute = `${route}?team=${teamId}`;  // 팀 ID 포함 경로 생성
    setActiveMenu(targetRoute);  // 클릭한 메뉴 활성화
    navigate(targetRoute);  // 경로 이동
  };

  return (
      <aside className="sidebar">
        <ul className="sidebar-menu">
          <li
              className={`menu-item ${activeMenu === `${ROUTES.TEAM_VIEW}?team=${teamId}` ? 'active' : ''}`}
              onClick={() => handleMenuClick(ROUTES.TEAM_VIEW)}
          >
            모아보기
          </li>
          <li
              className={`menu-item ${activeMenu === `${ROUTES.CALENDAR}?team=${teamId}` ? 'active' : ''}`}
              onClick={() => handleMenuClick(ROUTES.CALENDAR)}
          >
            캘린더
          </li>
          <li
              className={`menu-item ${activeMenu === `${ROUTES.CHAT_ROOM}?team=${teamId}` ? 'active' : ''}`}
              onClick={() => handleMenuClick(ROUTES.CHAT_ROOM)}
          >
            채팅
          </li>
          <li
              className={`menu-item ${activeMenu === `${ROUTES.NOTICES}?team=${teamId}` ? 'active' : ''}`}
              onClick={() => handleMenuClick(ROUTES.NOTICES)}
          >
            공지사항
          </li>
        </ul>
      </aside>
  );
}

export default Sidebar;
