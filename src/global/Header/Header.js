import React from "react";
import "./Header.css";
import { useAuth } from "../AuthContext";

const Header = ({ onTeamSwitch }) => {
  const { isLoggedIn, user } = useAuth(); // 로그인 상태와 사용자 정보 가져오기
  console.log("isLoggedIn:", isLoggedIn);
  console.log("user:", user);
  console.log("Profile Image URL:", user.profileImageUrl);

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
          {isLoggedIn ? (
            <>
              <img
                className="profile-img"
                src={user.profileImageUrl} // 프로필 이미지 경로
                alt="Profile"
              />
              <span className="profile-name">{user.nickname}</span>
            </>
          ) : (
            <button className="login-button">로그인</button> // 로그인 버튼
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
