import React, { useState } from 'react';
import LoginForm from '../components/utilites/LoginForm';
import Footer from '../components/Footer';


const App = () => {
  const [token, setToken] = useState(null);

  const handleLogin = (token) => {
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
                      >My Account</h3>
          </center> 
          <br></br><br></br>
          <LoginForm onLogin={handleLogin} />
          <br></br>
          <Footer />
        </div>
      )}
    </div>
  );
};

export default App;