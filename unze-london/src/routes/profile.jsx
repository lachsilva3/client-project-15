import React from 'react';

const ProfilePage = ({ email,onLogout }) => {
  return (
    <div>
        
          <div>
      
      <h1>Email: {email}</h1>
      <button onClick={onLogout}>Logout</button>
    </div>
    </div>
  );
};

export default ProfilePage;
