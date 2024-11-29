// import React from "react";
// import "./CreateTeamForm.css";
//
// const CreateTeamForm = () => {
//     const handleFormSubmit = (e) => {
//         e.preventDefault();
//         alert("팀이 생성되었습니다!"); // 폼 제출 시 알림
//     };
//
//     return (
//         <div className="create-team-form">
//             <h2>팀 개설하기</h2>
//             <form onSubmit={handleFormSubmit}>
//                 <div className="form-group">
//                     <label htmlFor="team-name">팀 이름 입력</label>
//                     <input id="team-name" type="text" placeholder="팀 이름 입력" required />
//                 </div>
//                 <div className="form-group">
//                     <label>라벨 추가</label>
//                     <div className="label-container">
//                         <span className="label">Design</span>
//                         <span className="label">Development</span>
//                         <button type="button" className="add-label-button">+</button>
//                     </div>
//                 </div>
//                 <button type="submit" className="next-button">다음 →</button>
//             </form>
//         </div>
//     );
// };
//
// export default CreateTeamForm;
