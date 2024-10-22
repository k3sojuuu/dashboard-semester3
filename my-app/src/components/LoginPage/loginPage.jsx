import React from 'react';
import { Link, useNavigate} from 'react-router-dom';
import "../LoginPage/loginCss.css"
import { useState } from 'react';


const LoginPage = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Kiểm tra thông tin đăng nhập
      if (username === 'admin12345' && password === 's') {
        onLogin();
        navigate('/home');  // Điều hướng đến trang Home
      } else {
        alert('Username hoặc Password không đúng. Vui lòng thử lại!');
      }
    };
  
    return (
      <div className="login-page bg-pan-left">
        <div className="welcome-text">
          <h1>Welcome to Dashboard Admin</h1>
        </div>
        <div className="login-box">
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="username" >Username</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
  
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
  
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    );
  };
  
  export default LoginPage;