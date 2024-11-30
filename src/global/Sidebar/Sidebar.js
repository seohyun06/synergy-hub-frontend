import React from 'react';
import { Link } from 'react-router-dom';  // Link 컴포넌트를 import
import './Sidebar.css';

function Sidebar() {
  return (
    <aside className="sidebar">
      <ul className="sidebar-menu">
        <li className="menu-item active">
          <Link to="/">모아보기</Link>  {/* 링크 추가 */}
        </li>
        <li className="menu-item">
          <Link to="/calendar">캘린더</Link>  {/* 링크 추가 */}
        </li>
        <li className="menu-item">
          <Link to="/chat">채팅</Link>  {/* 링크 추가 */}
        </li>
        <li className="menu-item">
          <Link to="/notices">공지사항</Link>  {/* 링크 추가 */}
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
