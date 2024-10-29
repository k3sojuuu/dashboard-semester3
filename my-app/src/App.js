import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link,useNavigate } from 'react-router-dom';
import HomePage from './components/HomePage/homePage';
import LoginPage from './components/LoginPage/loginPage';
import Statical from './components/Statistical/statical';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'; 

function App() {
  const handleLogout = () => {
    // Xử lý đăng xuất (nếu cần)
    setIsAuthenticated(false);
    navigate('/');  // Điều hướng về trang Login
  };

  const [isAuthenticated, setIsAuthenticated] = useState(false); // State theo dõi trạng thái đăng nhập
  const navigate = useNavigate();

  // Giả lập đăng nhập thành công
  const handleLogin = () => {
    setIsAuthenticated(true); // Đặt trạng thái là đã đăng nhập
    navigate('/home'); // Chuyển hướng đến trang Home sau khi đăng nhập
  };

  return (
    <div className="App">
    {/* Ẩn thanh điều hướng nếu người dùng chưa đăng nhập */}
    {isAuthenticated && (
      <nav>
        <ul className="left">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/statical">Statical</Link>
          </li>
        </ul>
        <ul className="right">
          <li>
            <Link to="/" onClick={handleLogout}>
              <FontAwesomeIcon icon={faSignOutAlt} />
              <span style={{ marginLeft: '5px' }}>Logout</span>
            </Link>
          </li>
        </ul>
      </nav>
    )}
  
    <Routes>
      {/* Trang Login */}
      <Route path="/" element={<LoginPage onLogin={handleLogin} />} />
  
      {/* Chỉ truy cập được Home và Statical khi đã đăng nhập */}
      {isAuthenticated && (
        <>
          <Route path="/home" element={<HomePage />} />
          <Route path="/statical" element={<Statical />} />
        </>
      )}
    </Routes>
  </div>
  );
}

export default App;