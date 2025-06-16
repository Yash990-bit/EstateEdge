import React, { useState } from "react";
import { signInWithEmailAndPassword ,GoogleAuthProvider, signInWithPopup,} from "firebase/auth";
import { auth } from "./firebase";
import "./Login.css";
import GoogleLogo from "../images/google.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (password.length < 8) {
      alert("Password must be at least 8 characters long.");
      return;
    }
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login successful!");
    } catch (err) {
      alert(err.message);
    }
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      alert("Logged in with Google successfully!");
    } catch (error) {
      alert(error.message);
    }
  };


  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <form className="login-form" onSubmit={handleLogin}>
      <h2>Login</h2>

      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <div className="password-container">
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <span
          className="toggle-password"
          onClick={togglePasswordVisibility}
        >
        </span>
      </div>

      <button type="submit">Login</button>

      <button type="button" onClick={handleGoogleLogin} className="google-icon-button">
        <img src={GoogleLogo} alt="Google login" className="google-logo-circle" />
      </button>
      
      <div className="auth-links">
        <a href="/forgot-password" className="forgot-password">
          Forgot Password?
        </a>
      </div>
    </form>
  );
};

export default Login;

