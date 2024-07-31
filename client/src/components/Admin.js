import React from 'react';
// Import useNavigate
//import './Admin.css'; // Ensure this CSS file exists
import UploadResult from './UploadResult';

const Admin = () => {
  // Use useNavigate hook

  return (
    <div>
      
      <h2>Admin Page</h2>
      {/* Add Admin functionalities here */}
      <UploadResult />
    </div>
  );
};

export default Admin;
