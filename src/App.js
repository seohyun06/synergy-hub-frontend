// import logo from './logo.svg';
// import './App.css';
//
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
//
// export default App;


// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import MainPage from "./mainPage/pages/MainPage";
// import CreateTeamPage from "./mainPage/pages/CreateTeamPage";
//
// const App = () => {
//     return (
//         <Router>
//             <Routes>
//                 <Route path="/" element={<MainPage />} />
//                 <Route path="/create-team" element={<CreateTeamPage />} />
//             </Routes>
//         </Router>
//     );
// };
//
// export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./mainPage/pages/MainPage";
import TeamPage from "./mainPage/pages/TeamPage";
import LoginPage from "./member/pages/loginPage"
import SignUpPage from "./member/pages/signUpPage";
import Header from './global/Header/Header';  // 경로 수정
import Sidebar from './global/Sidebar/Sidebar'; // 경로 수정
import Chat from "./chat/Chat";
import ChatRoom from "./chat/ChatRoom"; // Chat.js 경로 추가

const App = () => {
    return (
        <Router>
          <div className="app">
            {/*헤더 추가*/}
            <Header />
            <div className="app">
               {/* Sidebar 추가 */}
               <div className="main-content">
                  <Sidebar />
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/team/:id" element={<TeamPage />} />

                {/* 회원 */}
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignUpPage />} />




                <Route path="/chat" element={<Chat />} />
                <Route path="/chat/:chatRoomId" element={<ChatRoom />} />
            </Routes>
            </div>
            </div>
            </div>
        </Router>
    );
};

export default App;

