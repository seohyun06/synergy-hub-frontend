import React from "react";
import "./Header.css";

const Header = ({ onTeamSwitch }) => {
  return (
    <header className="header">
      <div className="header-left">
        <h1>Synergy Hub</h1>
        <select className="team-switcher" onChange={onTeamSwitch}>
          <option>Team A</option>
          <option>Team B</option>
          <option>Team C</option>
        </select>
      </div>
      <div className="header-right">
        <div className="profile-section">
          <img
            className="profile-img"
            src="/path/to/profile.jpg" // 프로필 이미지 경로
            alt="Profile"
          />
          <span className="profile-name">Username</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
