import React, { useState, useEffect } from 'react';
import LoginForm from '../components/utilites/LoginForm';
import Profile from '../routes/profile';
import Footer from '../components/Footer';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState('');

  // Function to handle login
  const handleLogin = (userEmail) => {
    setEmail(userEmail);
    setLoggedIn(true);
    // Store login state in local storage
    localStorage.setItem('loggedIn', 'true');
    localStorage.setItem('email', userEmail);
  };

  // Function to handle logout
  const handleLogout = () => {
    setEmail('');
    setLoggedIn(false);
    // Clear login state from local storage
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('email');
  };

  // Check local storage for login state on initial render
  useEffect(() => {
    const isLoggedIn = localStorage.getItem('loggedIn') === 'true';
    const savedEmail = localStorage.getItem('email') || '';
    setLoggedIn(isLoggedIn);
    setEmail(savedEmail);
  }, []); // Empty dependency array ensures this effect runs only once on initial render

  return (
    <div>
      <center>
        <h3 style={{ backgroundColor: 'black', color: 'white', padding: 30 }}>MY ACCOUNT</h3>
      </center>
      <div>
        <br /><br />
        <div>
          {loggedIn ? (
            <Profile email={email} onLogout={handleLogout} />
          ) : (
            <LoginForm onLogin={handleLogin} />
          )}
        </div>
        <br />
        <Footer />
      </div>
    </div>
  );
};

export default App;
