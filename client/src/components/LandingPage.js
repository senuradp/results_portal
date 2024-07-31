import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';
import LoginDialog from './LoginDialog';

const LandingPage = () => {
  const navigate = useNavigate();
  const [showLogin, setShowLogin] = useState(false);

  const handleAdminClick = () => {
    setShowLogin(true);
  };

  const handleCloseLogin = () => {
    setShowLogin(false);
  };

  const handleLoginSuccess = () => {
    setShowLogin(false);
    navigate('/admin');
  };

  return (
    <div className="container">
      <h1>Welcome to the Results Portal</h1>
      <button onClick={() => navigate('/search')}>Search Results</button>
      <button onClick={handleAdminClick}>Admin</button>
      <button onClick={() => navigate('/schedule')}>Schedule</button>
      {showLogin && (
        <LoginDialog onClose={handleCloseLogin} onLogin={handleLoginSuccess} />
      )}
    </div>
  );
};

export default LandingPage;
