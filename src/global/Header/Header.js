import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";
import { ROUTES } from "../../global/Links";
import "./Header.css";
import axios from "axios";
import 'font-awesome/css/font-awesome.min.css';

const Header = () => {
  const { isLoggedIn, user, setIsLoggedIn, setUser } = useAuth(); // 로그인 상태와 사용자 정보 가져오기
  const navigate = useNavigate();
  const location = useLocation(); // 현재 경로 가져오기
  const [isProfileOpen, setIsProfileOpen] = useState(false); // 프로필 정보 표시 여부 상태
  const [teams, setTeams] = useState([]); // 팀 목록 상태
  const [selectedTeamId, setSelectedTeamId] = useState(""); // 선택된 팀 ID 상태

  const [isEditingNickname, setIsEditingNickname] = useState(false);
  const [nicknameInput, setNicknameInput] = useState(user.nickname);
  const [selectedImage, setSelectedImage] = useState(user.profileImageUrl); // 초기값으로 사용자 프로필 이미지 설정
  const { updateAuthState } = useAuth();


  // 특정 페이지에서만 팀 드롭다운 숨기기
  const pagesWithoutTeamDropdown = [
    "/team/home", // 메인 페이지
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

      if (response.status === 401) {
        console.warn("401 Unauthorized 발생, 쿠키 포함 재요청");
        response = await fetch(ROUTES.REISSUE.link, {
          method: "POST",
          credentials: "include",
        });

        if (response.ok) {
          console.log("reissue 성공");

          const token = response.headers.get("Authorization");

          if (token) {
            const jwtToken = token.split(" ")[1];

            localStorage.setItem("accessToken", jwtToken);

            // navigate('/');
            window.location.reload();
          } else {
            alert("reissue 오류");
          }
        }

      }

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

  const fetchMemberInfo = async () => {
    console.log("회원 정보 요청 시작");
    const jwtToken = localStorage.getItem("accessToken");

    const requestHeaders = jwtToken
      ? {
        Authorization: `Bearer ${jwtToken}`,
      }
      : {};

    try {
      let response = await fetch(ROUTES.GETMEMBER.link, {
        headers: requestHeaders,
      });

      if (response.status === 401) {
        console.warn("401 Unauthorized 발생, 쿠키 포함 재요청");
        response = await fetch(ROUTES.REISSUE.link, {
          method: "POST",
          credentials: "include",
        });

        if (response.ok) {
          console.log("reissue 성공");

          const token = response.headers.get("Authorization");

          if (token) {
            const jwtToken = token.split(" ")[1];

            localStorage.setItem("accessToken", jwtToken);

            // navigate('/');
            window.location.reload();
          } else {
            alert("reissue 오류");
          }
        } else {  //refresh 토큰 만료 로그아웃 
          setIsLoggedIn(false);
          setUser({ email: "", nickname: "", profileImageUrl: "", userId: "" });
          sessionStorage.removeItem("user");
          sessionStorage.removeItem("isLoggedIn");
          localStorage.removeItem("accessToken");
  
          navigate("/"); // /login 경로로 이동
        }

      }

      if (response.ok) {
        const apiResponse = await response.json();
        console.log("API 응답:", apiResponse);

        const memberData = apiResponse.payload;

        updateAuthState(
          {
            userId: memberData.id,
            email: memberData.email,
            nickname: memberData.nickname,
            profileImageUrl: memberData.profileImageUrl,
            loginType: memberData.loginType,
          },
          true,

          setSelectedImage(memberData.profileImageUrl), // 초기 프로필 이미지 설정
          setNicknameInput(memberData.nickname) // 초기 닉네임 설정
        );
      } else {
        console.error("회원정보 요청 오류:", response.status);
      }
    } catch (error) {
      console.error("서버에 연결할 수 없습니다:", error);
    }
  };

  useEffect(() => {
    fetchMemberInfo();
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
    navigate("/"); // /login 경로로 이동
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
        sessionStorage.removeItem("user");
        sessionStorage.removeItem("isLoggedIn");
        localStorage.removeItem("accessToken");

        navigate("/"); // /login 경로로 이동
      } else {
        console.error("로그아웃 실패:", response.status);
      }
    } catch (error) {
      console.error("로그아웃 중 오류 발생:", error);
    }
  };

  const handleTitleClick = () => {
    navigate("/team/home"); // Synergy Hub 클릭 시 메인 페이지로 이동
  };


  const handleNicknameUpdate = async () => {
    try {

      // Get the JWT token from localStorage
      const jwtToken = localStorage.getItem("accessToken");

      // Set headers, including Authorization if the token exists
      const requestHeaders = jwtToken
        ? {
          Authorization: `Bearer ${jwtToken}`,
        }
        : {};

      await axios.put(ROUTES.UPDATENICKNAME.link,
        { nickname: nicknameInput }, // 서버와 통신
        { headers: requestHeaders })

      // 닉네임 상태 업데이트
      setUser(prevUser => ({ ...prevUser, nickname: nicknameInput })); // 사용자 상태 업데이트

      // 성공 시 상태 업데이트
      setIsEditingNickname(false);
      alert("닉네임이 업데이트되었습니다.");
    } catch (error) {
      console.error(error);
      alert("닉네임 업데이트 중 오류가 발생했습니다.");
    }
  };

  const handleProfileImageChange = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("multipartFile", file);

    try {
      const jwtToken = localStorage.getItem("accessToken");

      const requestHeaders = jwtToken
        ? {
          Authorization: `Bearer ${jwtToken}`,
        }
        : {};

      const headers = {
        "Content-Type": "multipart/form-data",
        ...requestHeaders, // Spread operator to merge requestHeaders into headers
      };

      await axios.put(ROUTES.UPDATEPROFILE.link, formData, { headers });

      // 선택된 이미지를 상태에 저장하여 즉시 반영
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result); // 선택된 이미지의 URL을 상태에 저장
      };
      reader.readAsDataURL(file);

      alert("프로필 이미지가 업데이트되었습니다.");
    } catch (error) {
      console.error(error);
      alert("프로필 이미지 업데이트 중 오류가 발생했습니다.");
    }
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
              value={selectedTeamId}
              onChange={handleTeamSwitch}
            >
              {teams.map((team) => (
                <option key={team.id} value={team.id}>
                  {team.name}
                </option>
              ))}
            </select>
          ) : (
            <span>{teams.length === 1 && teams[0].name}</span>
          ))}
      </div>
      <div className="header-right">
        <div className="profile-section">
          {isLoggedIn ? (
            <>
              <img
                className="profile-imgMain"
                // src={user.profileImageUrl}
                src={selectedImage}
                alt="Profile"
                onClick={toggleProfileDropdown}
                style={{
                  cursor: "pointer",
                  borderRadius: "50%",
                  width: "50px",
                  height: "50px",
                  objectFit: "cover",
                }}
              />

              {isProfileOpen && (
                <div className="profile-dropdown">
                  <div className="profile-header">
                    <h4>{user.email}</h4>
                  </div>
                  <div className="profile-info">
                    {user.profileImageUrl ? (
                      <div className="profile-img-container">
                        <img
                          className="profile-img"
                          // src={user.profileImageUrl}
                          src={selectedImage}
                          alt="Profile"
                          onClick={() => document.getElementById("profileImageInput").click()}
                        />
                        <input
                          id="profileImageInput"
                          type="file"
                          accept="image/*"
                          onChange={handleProfileImageChange}
                          style={{ display: "none" }}
                        />
                      </div>
                    ) : (
                      <div
                        className="profile-img-circle"
                        style={{
                          backgroundColor: user.profileColor,
                          cursor: "pointer",
                        }}
                        onClick={() => document.getElementById("profileImageInput").click()}
                      >
                        {user.nickname.charAt(0).toUpperCase()}
                        <input
                          id="profileImageInput"
                          type="file"
                          accept="image/*"
                          onChange={handleProfileImageChange}
                          style={{ display: "none" }}
                        />
                      </div>
                    )}
                    {user.loginType !== "social" && (
                      <div className="upload-instructions">이미지 클릭하여 수정</div>
                    )}
                  </div>
                  <div className="profile-details">
                    <span className="profile-nickname">
                      {isEditingNickname ? (
                        <>
                          <input
                            type="text"
                            value={nicknameInput}
                            onChange={(e) => setNicknameInput(e.target.value)}
                          />
                          <div className="nickname-actions">
                            <button onClick={handleNicknameUpdate}>저장</button>
                            <button onClick={() => setIsEditingNickname(false)}>취소</button>
                          </div>
                        </>
                      ) : (
                        <span className="profile-nickname">
                          {user.nickname}
                          <button
                            className="edit-button"
                            onClick={() => setIsEditingNickname(true)}
                            aria-label="Edit nickname"
                          >
                            <i className="fa fa-edit"></i>
                          </button>
                        </span>
                      )}
                    </span>
                  </div>
                  {/* <div className="profile-detailsEmail">
                    <span className="profile-email">{user.email}</span>
                  </div> */}
                  <button className="logout-button" onClick={handleLogout}>
                    로그아웃
                  </button>
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
