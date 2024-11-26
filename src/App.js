// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import ChatApp from "./ChatApp"; // 채팅 페이지
// import Home from "./Home"; // 홈 페이지
// import NotFound from "./NotFound"; // 404 페이지
//
// function App() {
//     return (
//         <Router>
//             <div className="App">
//                 <header>
//                     <h1>Synergy Hub</h1>
//                 </header>
//                 <main>
//                     <Routes>
//                         {/* 홈 페이지 */}
//                         <Route path="/" element={<Home />} />
//
//                         {/* 채팅 페이지 */}
//                         <Route path="/chat/:roomId" element={<ChatApp />} />
//
//                         {/* 404 페이지 */}
//                         <Route path="*" element={<NotFound />} />
//                     </Routes>
//                 </main>
//             </div>
//         </Router>
//     );
// }
//
// export default App;


// import React from "react";
// // import { HashRouter as Router, Routes, Route } from "react-router-dom";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import ChatRoom from "./chat/ChatRoom";
//
// function App() {
//     return (
//         <Router>
//             <div className="App">
//                 <Routes>
//                     <Route path="/" element={<h1>Welcome to the Chat App</h1>} />
//                     <Route path="/chat/:roomId" element={<ChatRoom />} />
//                 </Routes>
//             </div>
//         </Router>
//     );
// }
//
// export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChatRoom from "./chat/ChatRoom"; // ChatRoom 컴포넌트

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<h1>Welcome to Synergy Hub</h1>} />
                <Route path="/chat/:roomId" element={<ChatRoom />} />
                <Route path="*" element={<h1>404 - Page Not Found</h1>} />
            </Routes>
        </Router>
    );
}

export default App;
