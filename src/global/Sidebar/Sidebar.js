import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../routes';
import './Sidebar.css';

function Sidebar({ teamId }) {
  const [activeMenu, setActiveMenu] = useState(`/team/view?team=${teamId}`); // teamId를 쿼리 파라미터로 사용하여 초기 activeMenu 설정
  const navigate = useNavigate();

  const handleMenuClick = (route) => {
    setActiveMenu(route); // 메뉴 클릭 시 active 상태 업데이트
    navigate(route); // 메뉴 클릭 시 해당 경로로 이동
  };

  return (
    <aside className="sidebar">
      <ul className="sidebar-menu">
        <li
          className={`menu-item ${activeMenu === `/team/view?team=${teamId}` ? 'active' : ''}`}
          onClick={() => handleMenuClick(`/team/view?team=${teamId}`)}  // teamId를 쿼리 파라미터로 포함시켜 이동
        >
          모아보기
        </li>
        <li
          className={`menu-item ${activeMenu === ROUTES.CALENDAR ? 'active' : ''}`}
          onClick={() => handleMenuClick(ROUTES.CALENDAR)}
        >
          캘린더
        </li>
        <li
          className={`menu-item ${activeMenu === ROUTES.CHAT_ROOM ? 'active' : ''}`}
          onClick={() => handleMenuClick(ROUTES.CHAT_ROOM)}
        >
          채팅
        </li>
        <li
          className={`menu-item ${activeMenu === ROUTES.NOTICES ? 'active' : ''}`}
          onClick={() => handleMenuClick(ROUTES.NOTICES)}
        >
          공지사항
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
