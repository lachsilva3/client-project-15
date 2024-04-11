import React, { useState } from 'react';
import { LoginFormCss } from '../styles/LoginFormCss';
import { NavLink } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const { name, email, password } = formData;

  const onChange = (e) => {
    setFormData(prevState => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const handleRegistration = async (e) => {
    e.preventDefault();

    try {
        const auth = getAuth();
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Define user data from form
        const userData = {
            name: name,
            email: email,
        };

        // Access Firestore instance
        const db = getFirestore();

        // Add user data to Firestore
        await addDoc(collection(db, "users"), userData);

        // Clear form after successful registration
        setFormData({
            name: '',
            email: '',
            password: ''
        });

        // Display alert for successful registration
        alert("User created successfully! You can Login Now");

    } catch (error) {
        // Check if the error is due to email already in use
        if (error.code === "auth/email-already-in-use") {
            console.error("Error registering user:", error.message);
            // You can inform the user that the email is already in use
            // and provide options like logging in with that email or using a different one
            // For example:
            alert("Email address is already in use. Please try logging in or use a different email address.");
        } else {
            // Handle other errors
            console.error("Error registering user:", error.message);
        }
    }
};

  

  return (
    <LoginFormCss>
      <div className="login-container">
        <form className="login-form" onSubmit={handleRegistration}>
          <div className="form-group">
            <label>Full Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={onChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={onChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={onChange}
              className="form-control"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            <b>REGISTER</b>
          </button>
        </form>
        <br></br>
        <NavLink to={`/login/`} className={({ isActive }) => isActive ? "nav-link" : "nav-link"} >
          <h6 style={{ textAlign: 'center' }}><b>ALREADY HAVE AN ACCOUNT? LOGIN HERE</b>  </h6>
        </NavLink>
      </div>
    </LoginFormCss>
  );
};

export default RegistrationForm;