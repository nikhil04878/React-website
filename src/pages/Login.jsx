import React from 'react';
import { Link,useNavigate } from 'react-router-dom';
import '../styles/login.css';

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
      toast.success(`Login Sucess..`, {
          position: "top-right",
          autoClose: 2000, // Disappears after 2 seconds
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
    setTimeout(() => {
        navigate('/');
    }, 2000);
   
  }
;  return (
    <div className="login-container">
      <header className="navbar">
       
        
      </header>
      <div className="login-box">
        <h1>Login</h1>
        <form>
          <input type="email" placeholder="Enter your email" required />
          <input type="password" placeholder="Enter your password" required />
          <button type="submit" onClick={handleSubmit}>Login</button>
        </form>
        <p>Don't have an account? <Link to="/signup">Register here</Link></p>
      </div>
    </div>
  );
};

export default Login;
