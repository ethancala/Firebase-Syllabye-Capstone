import React, { useState, useEffect } from "react";
import { auth, createUserWithEmailAndPassword, provider, signInWithRedirect, getRedirectResult, db, doc, setDoc } from "../Firebase";
import { Link, useNavigate } from "react-router-dom";
import "./../components/Auth.css";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isStudent, setIsStudent] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  const isLongEnough = password.length >= 8;
  const isPasswordValid = hasUppercase && hasLowercase && hasSpecialChar && isLongEnough;

  useEffect(() => {
    const handleRedirectResult = async () => {
      try {
        const result = await getRedirectResult(auth);
        if (result) {
          const user = result.user;

          // Save user data to Firestore
          await setDoc(doc(db, "users", user.uid), {
            firstName: user.displayName.split(" ")[0],
            lastName: user.displayName.split(" ")[1],
            email: user.email,
            role: isStudent ? "student" : "teacher",
          });

          navigate("/");
        }
      } catch (error) {
        if (error.code !== "auth/no-current-user") {
          console.error("Error handling redirect result: ", error);
          setError(error.message);
        }
      }
    };

    handleRedirectResult();
  }, [auth, db, isStudent, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!isPasswordValid) {
      setError("Password must meet all requirements.");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await setDoc(doc(db, "users", user.uid), {
        firstName,
        lastName,
        email,
        role: isStudent ? "student" : "teacher",
      });

      navigate("/");
    } catch (err) {
      if (err.code === "auth/email-already-in-use") {
        setError("It looks like you already have an account, try logging in!");
      } else {
        setError(err.message);
      }
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await signInWithRedirect(auth, provider);
    } catch (error) {
      console.error("Error signing in with Google: ", error);
      setError(error.message);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <h2>Create Account</h2>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="firstName"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />

          <input
            type="text"
            id="lastName"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />

          <div className="role-selection">
            <button
              className={isStudent ? "active" : ""}
              onClick={() => setIsStudent(true)}
            >
              Student
            </button>
            <button
              className={!isStudent ? "active" : ""}
              onClick={() => setIsStudent(false)}
            >
              Teacher
            </button>
          </div>

          <input
            type="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <div className="password-rules">
            <p className={hasUppercase ? "valid" : "invalid"}>At least one uppercase letter</p>
            <p className={hasLowercase ? "valid" : "invalid"}>At least one lowercase letter</p>
            <p className={hasSpecialChar ? "valid" : "invalid"}>At least one special character</p>
            <p className={isLongEnough ? "valid" : "invalid"}>At least 8 characters</p>
          </div>

          <button type="submit" disabled={!isPasswordValid}>Continue</button>
        </form>
        <p>
          <Link to="#" onClick={handleGoogleSignIn}>Sign up with Google</Link>
        </p>
        <p>Already have an account? <Link to="/login">Log in here</Link></p>
      </div>
    </div>
  );
};

export default Signup;