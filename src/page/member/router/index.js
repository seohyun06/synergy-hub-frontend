import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from '../member/loginPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        {/* 다른 라우트 추가 */}
      </Routes>
    </Router>
  );
}

export default App;