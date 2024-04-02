import React, { useState } from 'react';
import { LoginFormCss } from '../styles/LoginFormCss';

export default function ContactForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {
    // Add your login logic here, such as making an API request to authenticate the user
    if (email === 'example@email.com' && password === 'password123') {
      // Successful login
      alert('Login successful!');
    } else {
      // Failed login
      setErrorMessage('Invalid email or password');
    }
  };
  return (
    <LoginFormCss>
    <div className='container'>
      <div className="login-container">
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <form className="login-form">
      <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
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
          <label>Your Phone Number:</label>
          <input
            type="text"     
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Message:</label>
          <textarea rows="6"  id="message"  className="form-control" />
        </div>
        <button type="button"  className="btn btn-primary">
          <b>Send</b>
        </button>
        <br></br>
       
   
      </form>
      <br></br>
      
    </div>
    </div>
    </LoginFormCss>
  )
}
