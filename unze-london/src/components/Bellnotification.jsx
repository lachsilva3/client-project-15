import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import '../App.css';

const BellIcon = () => {
  return (
    
   
    <div className="bell-icon-container">
     <FontAwesomeIcon icon={faBell} size="2x"/>
    </div>
   
  );
};

export default BellIcon;
