import React, { useState } from 'react';
import { LoginFormCss } from '../styles/LoginFormCss';
import { Outlet,NavLink } from 'react-router-dom'

const RegistrationForm = () => {
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleRegistration = () => {
    // Add your login logic here, such as making an API request to authenticate the user
    if (firstname === 'example1' && 
        lastname === 'test' && 
        email === 'example@email.com' && 
        password === 'password123') {
      // Successful login
      alert('Login successful!');
    } else {
      // Failed login
      setErrorMessage('Invalid email or password');
    }
  };

  return (
    <LoginFormCss>
    <div className="login-container">

      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <form className="login-form">
      <div className="form-group">
          <label>First Name:</label>
          <input
            type="text"
            value={firstname}
            onChange={(e) => setFirstName(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Last Name:</label>
          <input
            type="text"
            value={lastname}
            onChange={(e) => setLastName(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
          />
        </div>
        <button type="button" onClick={handleRegistration} className="btn btn-primary">
          <b>REGISTER</b>
        </button>
        <br></br>
      </form>
      <NavLink  to={`/login/`} className={({isActive})=>
        isActive? "nav-link" : "nav-link"} >
         <h6 style={{textAlign:'center'}}><b>ALREADY HAVE AN ACCOUNT? LOGIN HERE</b>  </h6>
        </NavLink>
    </div>
    </LoginFormCss>
  );
};

export default RegistrationForm;