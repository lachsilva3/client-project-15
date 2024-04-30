import React from 'react'
import { LoginFormCss } from '../components/styles/LoginFormCss'

export default function adminregister() {
  return (
    <div>
      <h1 style={{textAlign:'center',backgroundColor:'black'
    ,color:'white',padding:'20px'
    }}>Admin Register</h1>
      <LoginFormCss>
      <div className="login-container">
        <form className="login-form" >
          <div className="form-group">
            <label>Full Name:</label>
            <input
              type="text"
              id="name"
             
        
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              id="email"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              id="password"
              className="form-control"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            <b>Register as admin</b>
          </button>
        </form>
        <br></br>
       
      </div>
    </LoginFormCss>
    </div>
  )
}
