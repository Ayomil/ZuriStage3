import { useState } from "react";
import { auth } from "./Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";
import AuthDetails from "./AuthDetails";

function SignUp() {

     const [Email, SetEmail] = useState("");
     const [Password, SetPassword] = useState("");
     const [Name, SetName] = useState("");


     function handleSubmit(e) {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, Email, Password)
          .then((useCredential) => {
            console.log(useCredential);
          })
          .catch((error) => {
             const errorCode = error.code;
             const errorMessage = error.message;

             alert(errorMessage);
          });
     } 
  return (
    <>
      <h1 style={{ textAlign: "center" }}>SignUp Page</h1>
      <hr />
      <form onSubmit={handleSubmit} className="LoginContainer">
        <AuthDetails />
        <div>
          <label htmlFor="username">Username :</label>
          <input
            value={Name}
            onChange={(e) => SetName(e.target.value)}
            type="text"
            placeholder="Jane Doe"
            id="Name"
            name="Name"
          />
        </div>

        <div>
          <label htmlFor="email">Email :</label>
          <input
            value={Email}
            onChange={(e) => SetEmail(e.target.value)}
            type="email"
            placeholder="example@gmail.com"
            id="email"
            name="email"
          />
        </div>

        <div>
          <label htmlFor="password">Password :</label>
          <input
            value={Password}
            onChange={(e) => SetPassword(e.target.value)}
            type="password"
            placeholder="*********"
            id="password"
            name="password"
          />
        </div>

        <div>
          <button type="submit">Sign Up</button>
        </div>

        <div>
          <Link to="/">
            <span id="SignUpLink">To Login</span>
          </Link>
        </div>
      </form>
    </>
  );
}

export default SignUp;



<Link to="/">
  <span id="SignUpLink">To Login</span>
</Link>;
