import React, { useState } from "react";
import "./Header.css";
import { useAuth } from "../AuthContext";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../global/Links";

const Header = ({ onTeamSwitch }) => {
  const { isLoggedIn, user } = useAuth(); // 로그인 상태와 사용자 정보 가져오기
  const navigate = useNavigate();
  const [isProfileOpen, setIsProfileOpen] = useState(false); // 프로필 정보 표시 여부 상태
  const { setIsLoggedIn} = useAuth();

  const handleLoginClick = () => {
    navigate("/login"); // /login 경로로 이동
  };

  const toggleProfileDropdown = () => {
    setIsProfileOpen((prev) => !prev); // 프로필 드롭다운 토글
  };

  const handleLogout = async () => {
    try {
      const response = await fetch(ROUTES.LOGOUT.link, {
        method: "POST",
        credentials: "include", // 쿠키 포함
      });

      if (response.ok) {
        console.log("로그아웃 성공");

        localStorage.removeItem("accessToken");
        setIsLoggedIn(false); // 로그인 상태 업데이트
        navigate("/login"); // /login 경로로 이동
      } else {
        console.error("로그아웃 실패:", response.status);
      }
    } catch (error) {
      console.error("로그아웃 중 오류 발생:", error);
    }
  };

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
                className="profile-imgMain"
                src={user.profileImageUrl} // 프로필 이미지 경로
                alt="Profile"
                onClick={toggleProfileDropdown} // 프로필 이미지 클릭 시 드롭다운 토글
                style={{ cursor: "pointer" }} // 클릭 가능하게 커서 변경
              />
              {isProfileOpen && (
                <div className="profile-dropdown">
                  <h4>프로필</h4>
                  <div className="profile-info">
                    {user.profileImageUrl ? (
                      <img
                        className="profile-img"
                        src={user.profileImageUrl}
                        alt="Profile"
                      />
                    ) : (
                      <div
                        className="profile-img-circle"
                        style={{ backgroundColor: user.profileColor }}
                      >
                        {user.nickname.charAt(0).toUpperCase()}
                      </div>
                    )}
                    <div className="profile-details">
                      <span className="profile-nickname">{user.nickname}</span>
                    </div>
                    <div className="profile-detailsEmail">
                      <span className="profile-email">{user.email}</span>
                    </div>


                    <button className="logout-button" onClick={handleLogout}>
                      로그아웃
                    </button>
                  </div>
                </div>
              )}
            </>
          ) : (
            <button className="login-button" onClick={handleLoginClick}>로그인</button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
