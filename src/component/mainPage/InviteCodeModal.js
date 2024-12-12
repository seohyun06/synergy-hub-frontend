import React from "react";
import "./InviteCodeModal.css"; // 스타일 분리

const InviteCodeModal = ({ inviteCode, onClose }) => {
    const handleCopy = () => {
        navigator.clipboard.writeText(inviteCode);
        alert("초대 코드가 복사되었습니다!"); // 복사 완료 알림
    };

    return (
        <div className="modal-overlay InviteCodeModal" onClick={onClose}>
            <div className="modal-content InviteCodeModal" onClick={(e) => e.stopPropagation()}>
                <h2>📩 초대 코드 📩</h2>
                <p className="invite-code-text InviteCodeModal">{inviteCode}</p> {/* 초대 코드 표시 */}
                <button className="copy-button InviteCodeModal" onClick={handleCopy}>
                    복사하기
                </button>
                <button className="close-button InviteCodeModal" onClick={onClose}>
                    닫기
                </button>
            </div>
        </div>
    );
};

export default InviteCodeModal;
