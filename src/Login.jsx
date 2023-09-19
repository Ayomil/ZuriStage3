import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { auth } from "./Firebase";
import "./Login.css";
import { signInWithEmailAndPassword } from "firebase/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const Navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        Navigate("/ActualPage"); 
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
      });
  }

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Login Page</h1>
      <hr />

      <form onSubmit={handleSubmit} className="LoginContainer">
        <div className="one EmailLogin">
          <label htmlFor="email">Email :</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="example@gmail.com"
            id="email"
            name="email"
          />
        </div>

        <div className="one PassswordLogin">
          <label htmlFor="password">Password :</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="*********"
            id="password"
            name="password"
          />
        </div>

        <div>
          <button type="submit">Login</button>
        </div>

        <div className="One LinkLogin">
          <Link to="SignUp">
            <span id="SignUpLink">To SignUp</span>
          </Link>
        </div>
      </form>
    </>
  );
}

export default Login;
