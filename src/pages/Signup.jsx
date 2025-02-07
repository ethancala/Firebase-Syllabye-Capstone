import React, { useState } from "react";
import { auth, createUserWithEmailAndPassword } from "../Firebase";
import { Link, useNavigate } from "react-router-dom";
import "./../components/Auth.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  const isPasswordValid = hasUppercase && hasLowercase && hasSpecialChar;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
  
    if (!isPasswordValid) {
      setError("Password must meet all requirements.");
      return;
    }
  
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      if (err.code === "auth/email-already-in-use") {
        setError("It looks like you already have an account, try logging in!");
      } else {
        setError(err.message);
      }
    }
  };
  

  return (
    <div className="auth-page">
      <div className="auth-container">
        <h2>Create Account</h2>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <div className="password-rules">
            <p className={hasUppercase ? "valid" : "invalid"}>At least one uppercase letter</p>
            <p className={hasLowercase ? "valid" : "invalid"}>At least one lowercase letter</p>
            <p className={hasSpecialChar ? "valid" : "invalid"}>At least one special character</p>
          </div>

          <button type="submit" disabled={!isPasswordValid}>Continue</button>
        </form>
        <p>Already have an account? <Link to="/login">Log in here</Link>.</p>
      </div>
    </div>
  );
};

export default Signup;
