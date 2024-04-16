import React from 'react';

const Profile = ({ email, onLogout }) => {
  return (
    <div>
      {email && ( // Render only if email is truthy (i.e., user is logged in)
        <div>
          <center>
          <h3>Email:- {email}</h3>
          <button style={{backgroundColor:'black',


        }} className='btn btn-dark' onClick={onLogout}>
            <b>Logout</b>
            </button>
          </center>
        </div>
      )}
    </div>
  );
};

export default Profile;
