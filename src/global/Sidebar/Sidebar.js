import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // useNavigate 훅 사용
import { ROUTES } from '../../routes';
import './Sidebar.css';

function Sidebar() {
  const [activeMenu, setActiveMenu] = useState(ROUTES.HOME);  // 활성화된 메뉴 상태
  const navigate = useNavigate();  // useNavigate 훅을 사용하여 경로 이동

  const handleMenuClick = (route) => {
    setActiveMenu(route);  // 클릭한 메뉴를 활성화 상태로 업데이트
    navigate(route);  // 메뉴 클릭 시 해당 경로로 이동
  };

  return (
    <aside className="sidebar">
      <ul className="sidebar-menu">
        <li
          className={`menu-item ${activeMenu === ROUTES.TEAM_VIEW ? 'active' : ''}`}
          onClick={() => handleMenuClick(ROUTES.TEAM_VIEW)}  // 메뉴 클릭 시 active 상태 변경 및 경로 이동
        >
          모아보기
        </li>
        <li
          className={`menu-item ${activeMenu === ROUTES.CALENDAR ? 'active' : ''}`}
          onClick={() => handleMenuClick(ROUTES.CALENDAR)}  // 메뉴 클릭 시 active 상태 변경 및 경로 이동
        >
          캘린더
        </li>
        <li
          className={`menu-item ${activeMenu === ROUTES.CHAT_ROOM ? 'active' : ''}`}
          onClick={() => handleMenuClick(ROUTES.CHAT_ROOM)}  // 메뉴 클릭 시 active 상태 변경 및 경로 이동
        >
          채팅
        </li>
        <li
          className={`menu-item ${activeMenu === ROUTES.NOTICES ? 'active' : ''}`}
          onClick={() => handleMenuClick(ROUTES.NOTICES)}  // 메뉴 클릭 시 active 상태 변경 및 경로 이동
        >
          공지사항
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
