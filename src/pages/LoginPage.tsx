import React, { useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/LoginPage.css";

interface Credentials {
  username: string;
  password: string;
}

const LoginPage: React.FC = () => {
  const [credentials, setCredentials] = useState<Credentials>({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = () => {
    const { username, password } = credentials;
    if (username === "user" && password === "password") {
      localStorage.setItem("authToken", "some_random_token");
      navigate("/");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Login</h2>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={credentials.username}
          onChange={handleInputChange}
          className="login-input"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={credentials.password}
          onChange={handleInputChange}
          className="login-input"
        />
        <button onClick={handleLogin} className="login-button">
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
