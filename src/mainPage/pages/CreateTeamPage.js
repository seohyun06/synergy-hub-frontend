// import React, { useState } from "react";
//
// const CreateTeamPage = () => {
//     const [teamName, setTeamName] = useState("");
//
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         alert(`Team "${teamName}" created!`);
//     };
//
//     return (
//         <div style={{ padding: "20px" }}>
//             <h2>Create a New Team</h2>
//             <form onSubmit={handleSubmit}>
//                 <input
//                     type="text"
//                     placeholder="Team Name"
//                     value={teamName}
//                     onChange={(e) => setTeamName(e.target.value)}
//                     style={{ marginRight: "10px" }}
//                 />
//                 <button type="submit">Create</button>
//             </form>
//         </div>
//     );
// };
//
// export default CreateTeamPage;
