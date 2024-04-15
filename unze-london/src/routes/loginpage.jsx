import React, { useState } from 'react';
import LoginForm from '../components/utilites/LoginForm';
import Profile from '../routes/profile';
import Footer from '../components/Footer';


const App = () => {
  
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState('');

  const handleLogin = (userEmail) => {
    setEmail(userEmail);
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setEmail('');
    setLoggedIn(false);
  };

  return (
    <div>
          <center>
          <h3 style={{backgroundColor:'black', 
                      color:'white',
                      padding:30,
                      }}
                      >MY ACCOUNT</h3>
          </center> 
        <div>
          <br></br><br></br>
          <div>
      {loggedIn ? (
        <Profile email={email} onLogout={handleLogout} />
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </div>
          <br></br>
          <Footer />
        </div>
  
    </div>
  );
};

export default App;