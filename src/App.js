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

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/team/:id" element={<TeamPage />} />

                {/* 회원 */}
                <Route path="/login" element={<LoginPage />} />

            </Routes>
        </Router>
    );
};

export default App;

