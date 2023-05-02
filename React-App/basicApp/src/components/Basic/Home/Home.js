import React, { useState } from "react";

import "./home.css";
import { Link } from 'react-router-dom';


function Home() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>First Name </label>
          <input type="text" name="fname" required />
          <label>Last Name </label>
          <input type="text" name="lname" required />
        </div>
        <div className="input-container">
          <label>Date of Birth </label>
          <input type="date" name="dateOfBirth" required />
        </div>
        <div className="input-container">
          <label>Email </label>
          <input type="text" name="email" required />
        </div>
        <div className="input-container">
          <label>Gender </label>
          <input type="radio" name="gender" required />
        </div>
        <div className="input-container">
          <label>Agree T&C </label>
          <input type="checkbox" name="terms" required />
        </div>
        <div className="button-container d-flex gap-4">
          <input type="submit" />
          <input type="reset" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
        <div className="button-container d-flex gap-4">
          <button>Home</button>
          <Link to="/login">Logout</Link>
        </div>
      <div className="login-form">
        <div className="title">Home</div>
        {renderForm}
      </div>
    </div>
  );
}

export default Home;