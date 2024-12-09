import React, { useState}  from 'react';
import { Row, Col, Card, Form, Button } from 'react-bootstrap';
import logo from './img/logo5.jpeg';
import './css/style.css'
import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from '../../global/Links';

const SignUpPage = () => {

    const [form, setForm] = useState({
        nickname: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const navigate = useNavigate(); // useNavigate 훅 사용

    const handleChange = (event) => {
        const { name, value } = event.target;
        setForm({
            ...form,
            [name]: value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (form.password !== form.confirmPassword) {
            alert("비밀번호가 일치하지 않습니다.");
            return;
        }

        const requestBody = {
            nickname: form.nickname,
            email: form.email,
            password: form.password,
        };

        try {
            const response = await fetch(ROUTES.SIGNUP.link, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestBody),
            });

            if (response.ok) {  //회원가입 성공
                alert("회원 가입에 성공하셨습니다.")
                navigate('/login');
            } else {  //회원가입 실패 
                const errorData = await response.json();
                alert(errorData.message || "회원 가입에 실패했습니다.");
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
                                <p className="lead mb-5 text-white">• Manage multiple team projects at once</p>
                                <p className="lead mb-5 text-white">• Real-time chat between team members</p>
                                <p className="lead mb-5 text-white">• Check team announcements</p>
                                <p className="lead mb-5 text-white">• View the schedules of the teams I belong to at a glance</p>

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
                                        <div className="mb-4 text-center">
                                            <h3>회원 가입</h3>
                                        </div>
                                    </div>
                                </div>
                                <form onSubmit={handleSubmit}>
                                    <div className="row gy-3 overflow-hidden">
                                        <div className="col-12">
                                            <div className="form-floating mb-3">
                                                <input
                                                    type="text"
                                                    className="form-control rounded-input"
                                                    name="nickname"
                                                    id="nickname"
                                                    placeholder="닉네임"
                                                    value={form.nickname}
                                                    onChange={handleChange}
                                                    required
                                                />
                                                <label htmlFor="nickname" className="form-label">닉네임</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating mb-3">
                                                <input
                                                    type="email"
                                                    className="form-control rounded-input"
                                                    name="email"
                                                    id="email"
                                                    placeholder="name@example.com"
                                                    value={form.email}
                                                    onChange={handleChange}
                                                    required
                                                />
                                                <label htmlFor="email" className="form-label">이메일</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating mb-3">
                                                <input
                                                    type="password"
                                                    className="form-control rounded-input"
                                                    name="password"
                                                    id="password"
                                                    placeholder="비밀번호"
                                                    value={form.password}
                                                    onChange={handleChange}
                                                    required
                                                />
                                                <label htmlFor="password" className="form-label">비밀번호</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating mb-3">
                                                <input
                                                    type="password"
                                                    className="form-control rounded-input"
                                                    name="confirmPassword"
                                                    id="confirm_password"
                                                    placeholder="비밀번호 확인"
                                                    value={form.confirmPassword}
                                                    onChange={handleChange}
                                                    required
                                                />
                                                <label htmlFor="confirm_password" className="form-label">비밀번호 확인</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="d-grid">
                                                <button className="btn btn-primary btn-lg card-custom rounded-input" type="submit">
                                                    회원 가입
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                <div className="row mt-4">
                                    <div className="col-12">
                                        <div className="text-center">
                                            <a href='/login' className="btn btn-custom rounded-input">
                                                <i className="fa fa-google"></i>
                                                뒤로 가기
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


export default SignUpPage;
