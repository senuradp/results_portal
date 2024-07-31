import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Admin from './components/Admin';
import LandingPage from './components/LandingPage';
import Schedule from './components/Schedule';
import SearchResult from './components/SearchResult';
import UploadResult from './components/UploadResult';
import './App.css'; // Import the CSS file

const App = () => {
  return (
    <Router>
      <div className="app-container">
        
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/upload" element={<UploadResult />} />
          <Route path="/search" element={<SearchResult />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/schedule" element={<Schedule />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
