import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";
import { ROUTES } from "../../global/Links";
import "./Header.css";

const Header = () => {
  const { isLoggedIn, user, setIsLoggedIn, setUser } = useAuth(); // 로그인 상태와 사용자 정보 가져오기
  const navigate = useNavigate();
  const location = useLocation(); // 현재 경로 가져오기
  const [isProfileOpen, setIsProfileOpen] = useState(false); // 프로필 정보 표시 여부 상태
  const [teams, setTeams] = useState([]); // 팀 목록 상태
  const [selectedTeamId, setSelectedTeamId] = useState(""); // 선택된 팀 ID 상태

  // 특정 페이지에서만 팀 드롭다운 숨기기
  const pagesWithoutTeamDropdown = [
    "/", // 메인 페이지
    "/login", // 로그인 페이지
    "/register", // 회원가입 페이지
  ];

  const shouldShowTeamDropdown = !pagesWithoutTeamDropdown.includes(
    location.pathname
  );

  // 팀 목록 가져오기
  const fetchTeams = async () => {
    try {
      const token = localStorage.getItem("accessToken");
      if (!token) {
        // alert("인증 정보가 없습니다. 다시 로그인해주세요.");
        return;
      }

      const response = await fetch("http://localhost:8080/teams/member", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("팀 목록 가져오기에 실패했습니다.");
      }

      const data = await response.json();
      setTeams(data); // 팀 목록 상태 업데이트

      // 쿼리스트링에서 team ID를 읽고 기본값 설정
      const queryParams = new URLSearchParams(location.search);
      const teamIdFromQuery = queryParams.get("team"); // 쿼리스트링에서 team 값 추출
      if (teamIdFromQuery) {
        // 쿼리스트링 값과 매칭되는 팀이 있는지 찾기
        const matchedTeam = data.find((team) => team.id === teamIdFromQuery);
        if (matchedTeam) {
          setSelectedTeamId(matchedTeam.id); // 매칭된 팀을 기본값으로 설정
        }
      } else if (data.length === 1) {
        // 팀이 하나일 경우 자동으로 선택
        setSelectedTeamId(data[0].id);
      }
    } catch (error) {
      console.error("팀 목록 가져오기 오류:", error);
    }
  };

  useEffect(() => {
    fetchTeams(); // 컴포넌트 로드 시 팀 목록 가져오기
  }, []); // 처음 한번만 팀 목록을 가져오기

  useEffect(() => {
    // location.search가 변경될 때마다 쿼리스트링에서 팀 ID를 읽어 설정
    const queryParams = new URLSearchParams(location.search);
    const teamIdFromQuery = queryParams.get("team"); // 쿼리스트링에서 team 값 추출
    if (teamIdFromQuery) {
      setSelectedTeamId(teamIdFromQuery); // 해당 team ID를 드롭다운 선택값으로 설정
    }
  }, [location.search]); // location.search가 변경될 때마다 실행

  const handleTeamSwitch = (event) => {
    const selectedTeamId = event.target.value; // 선택된 팀 ID
    setSelectedTeamId(selectedTeamId); // 선택된 팀 ID 상태 업데이트
    navigate(`/team/view?team=${selectedTeamId}`); // 해당 팀 상세 페이지로 이동
  };

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

        setIsLoggedIn(false);
        setUser({ email: "", nickname: "", profileImageUrl: "", userId: "" });
        localStorage.removeItem("user");
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("accessToken");

        navigate("/login"); // /login 경로로 이동
      } else {
        console.error("로그아웃 실패:", response.status);
      }
    } catch (error) {
      console.error("로그아웃 중 오류 발생:", error);
    }
  };

  const handleTitleClick = () => {
    navigate("/"); // Synergy Hub 클릭 시 메인 페이지로 이동
  };

  return (
    <header className="header">
      <div className="header-left">
        <h1 onClick={handleTitleClick} style={{ cursor: "pointer" }}>
          Synergy Hub
        </h1>
        {/* 조건에 따라 팀 드롭다운 표시 */}
        {shouldShowTeamDropdown &&
          (teams.length > 1 ? (
            <select
              className="team-switcher"
              value={selectedTeamId} // 선택된 팀 ID로 드롭다운 값 설정
              onChange={handleTeamSwitch}
            >
              {teams.map((team) => (
                <option key={team.id} value={team.id}>
                  {team.name}
                </option>
              ))}
            </select>
          ) : (
            <span>{teams.length === 1 && teams[0].name}</span> // 팀이 하나일 경우 팀 이름만 표시
          ))}
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
            <button className="login-button" onClick={handleLoginClick}>
              로그인
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
