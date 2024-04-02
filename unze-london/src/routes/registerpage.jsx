import React, { useState } from 'react';
import RegistrationForm from '../components/utilites/RegistrationForm';
import Footer from '../components/Footer';


const RegisterPage = () => {
  const [token, setToken] = useState(null);

  const handleRegistration = (token) => {
    setToken(token);
  };

  return (
    <div>
      {token ? (
        <div>
         
          {/* Authenticated content */}
          <button onClick={() => setToken(null)}>Logout</button>
        </div>
      ) : (
        <div>
        <center>
          <h3 style={{backgroundColor:'black', 
                      color:'white',
                      padding:30,
                      }}
                      >Register</h3>
          </center> 
          <br></br><br></br>
          <RegistrationForm onLogin={handleRegistration} />
          <br></br>
          <Footer />
        </div>
      )}
    </div>
  );
};

export default RegisterPage;