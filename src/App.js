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
import LoginPage from "./member/pages/loginPage";
import SignUpPage from "./member/pages/signUpPage";
import Header from './global/Header/Header';
import Sidebar from './global/Sidebar/Sidebar';
import Chat from "./chat/Chat";
import ChatRoom from "./chat/ChatRoom";

const Layout = ({ children }) => {
  return (
    <div className="app">
      <Header />
      <div className="app-body">
        <Sidebar />
        <div className="main-content">{children}</div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        {/* MainPage는 헤더와 사이드바 없이 렌더링 */}
        <Route path="/" element={<MainPage />} />

        {/* 그 외 페이지들은 Layout을 사용해 헤더와 사이드바 포함 */}
        <Route
          path="/team/:id"
          element={<Layout><TeamPage /></Layout>}
        />
        <Route
          path="/login"
          element={<Layout><LoginPage /></Layout>}
        />
        <Route
          path="/signup"
          element={<Layout><SignUpPage /></Layout>}
        />
        <Route
          path="/chat"
          element={<Layout><Chat /></Layout>}
        />
        <Route
          path="/chat/:chatRoomId"
          element={<Layout><ChatRoom /></Layout>}
        />
      </Routes>
    </Router>
  );
};

export default App;


