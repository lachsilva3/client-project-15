import React from 'react';

const Profile = ({ email, onLogout }) => {
  return (
    <div>
      {email && ( // Render only if email is truthy (i.e., user is logged in)
        <div>
          <h1>Welcome, {email}</h1>
          <button onClick={onLogout}>Logout</button>
        </div>
      )}
    </div>
  );
};

export default Profile;
