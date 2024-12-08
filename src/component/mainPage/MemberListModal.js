import React from "react";
import "./MemberListModal.css"; // CSS 파일로 스타일 분리

const MemberListModal = ({ members, onClose }) => {
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <h2>멤버 리스트</h2>
                <ul className="member-list">
                    {members.map((member, index) => (
                        <li key={index} className="member-item">
                            <img
                                src={member.profileImageUrl || "https://via.placeholder.com/32"}
                                alt={`${member.nickname || "Unknown"}'s profile`}
                                className="member-avatar"
                            />
                            <div className="member-details">
                                <span className="member-nickname">
                                    {member.nickname || "Unknown"}
                                </span>
                                <span className="member-email">{member.email || "No Email"}</span>
                            </div>
                        </li>
                    ))}
                </ul>
                <button className="close-button" onClick={onClose}>
                    닫기
                </button>
            </div>
        </div>
    );
};

export default MemberListModal;
