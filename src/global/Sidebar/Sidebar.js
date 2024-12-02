import React from 'react';
import { Link } from 'react-router-dom';  // Link 컴포넌트를 import
import { ROUTES } from '../../routes';    // routes.js에서 상수 import
import './Sidebar.css';

function Sidebar() {
  return (
    <aside className="sidebar">
      <ul className="sidebar-menu">
        <li className="menu-item active">
          <Link to={ROUTES.HOME}>모아보기</Link>  {/* 링크 추가 */}
        </li>
        <li className="menu-item">
          <Link to={ROUTES.CALENDAR}>캘린더</Link>  {/* 링크 추가 */}
        </li>
        <li className="menu-item">
          <Link to={ROUTES.CHAT}>채팅</Link>  {/* 링크 추가 */}
        </li>
        <li className="menu-item">
          <Link to={ROUTES.NOTICES}>공지사항</Link>  {/* 링크 추가 */}
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;