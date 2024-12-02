import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import logo from './img/logo5.jpeg';
import './css/style.css';
import { ROUTES } from '../../global/Routes';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const requestBody = {
      username: email, // 서버에서 username으로 요청 받음 
      password,
    };

    try {
      const response = await fetch(ROUTES.LOGIN.link, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      if (response.ok) {

        alert("로그인 성공");
        // 응답 헤더에서 토큰 추출
        const token = response.headers.get("Authorization"); // Authorization 헤더에서 토큰 가져오기

        if (token) {
        
          const jwtToken = token.split(" ")[1]; // "Bearer " 부분제거

          // 토큰을 로컬 스토리지에 저장
          localStorage.setItem('jwtToken', jwtToken);

          navigate('/'); 
        } else {
          alert("로그인 오류");
        }
      } else {
        const errorData = await response.json();
        alert(errorData.message || "로그인에 실패했습니다.");
      }
    } catch (error) {
      alert("서버에 연결할 수 없습니다.");
    }
  };

  return (
    <section className="bg-custom py-3 py-md-5 py-xl-8">
      <div className="container">
        <div className="row gy-4 align-items-center">
          <div className="col-12 col-md-6 col-xl-7">
            <div className="d-flex justify-content-center bg-custom">
              <div className="col-12 col-xl-9">
                <img className="img-fluid rounded mb-4" loading="lazy" src={logo} width="245" height="80" alt="synergyhub Logo" />
                <hr className="border-white mb-4" />
                <h2 className="h1 mb-4 text-black">시너지 허브를 통해 효과적인 소통과 협력을 경험하세요</h2>
                <p className="lead mb-5 text-white">You can manage team calendars, chat with team members, and check team announcements.</p>
                <div className="text-end">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" className="bi bi-grip-horizontal" viewBox="0 0 16 16">
                    <path d="M2 8a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm3 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm3 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm3 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm3 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-5">
            <div className="card border-0 rounded-4">
              <div className="card-body p-3 p-md-4 p-xl-5">
                <div className="row">
                  <div className="col-12">
                    <div className="mb-4">
                      <h3>Sign in</h3>
                      <p>계정이 없으신가요? <Link to="/signup">회원가입</Link></p>
                    </div>
                  </div>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="row gy-3 overflow-hidden">
                    <div className="col-12">
                      <div className="form-floating mb-3">
                        <input
                          type="email"
                          className="form-control rounded-input"
                          name="email"
                          id="email"
                          placeholder="name@example.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                        <label htmlFor="email" className="form-label">Email</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating mb-3">
                        <input
                          type="password"
                          className="form-control rounded-input"
                          name="password"
                          id="password"
                          placeholder="Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                        <label htmlFor="password" className="form-label">Password</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" name="remember_me" id="remember_me" />
                        <label className="form-check-label text-secondary" htmlFor="remember_me">
                          Keep me logged in
                        </label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="d-grid">
                        <button className="btn btn-primary btn-lg card-custom rounded-input" type="submit">Log in now</button>
                      </div>
                    </div>
                  </div>
                </form>
                <br />
                <div className="row">
                  <div className="col-12">
                    <div className="text-center mb-4">
                      <div className="d-flex align-items-center">
                        <hr className="border-black" style={{ flex: 1, margin: '0 10px', borderColor: 'black' }} />
                        <span>Or continue with</span>
                        <hr className="border-black" style={{ flex: 1, margin: '0 10px', borderColor: 'black' }} />
                      </div>
                    </div>
                    <div className="text-center">
                      <a href={ROUTES.GOOGLEURL.link} className="btn btn-custom rounded-input">
                        <i className="fa fa-google"></i>
                        Sign in with <b>Google</b>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoginPage;
