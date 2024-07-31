import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
//import './UploadResult.css'; // Import CSS file for styling

const UploadResult = () => {
  const [event, setEvent] = useState('');
  const [gender, setGender] = useState('');
  const [entries, setEntries] = useState([{ name: '', placedAt: '', timing: '' }]);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/api/upload`, { event, gender, entries });
      setEvent('');
      setGender('');
      setEntries([{ name: '', placedAt: '', timing: '' }]);
      alert('Result uploaded successfully');
    } catch (error) {
      console.error('Error uploading result:', error);
      alert('Failed to upload result');
    }
  };

  const handleEntryChange = (index, field, value) => {
    const newEntries = [...entries];
    newEntries[index][field] = value;
    setEntries(newEntries);
  };

  const addEntry = () => {
    setEntries([...entries, { name: '', placedAt: '', timing: '' }]);
  };

  const removeEntry = (index) => {
    const newEntries = entries.filter((_, i) => i !== index);
    setEntries(newEntries);
  };

  return (
    <div>
      <button className="back-button" onClick={() => navigate('/')}>
        &#8592; Back
      </button>
      <h2>Upload Result</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Event:</label>
          <select value={event} onChange={(e) => setEvent(e.target.value)} required>
            <option value="">Select an Event</option>
            <option value="50m Butterfly">50m Butterfly</option>
            <option value="100m Butterfly">100m Butterfly</option>
            <option value="200m Butterfly">200m Butterfly</option>
            <option value="50m Freestyle">50m Freestyle</option>
            <option value="100m Freestyle">100m Freestyle</option>
            <option value="200m Freestyle">200m Freestyle</option>
            <option value="400m Freestyle">400m Freestyle</option>
            <option value="50m Backstroke">50m Backstroke</option>
            <option value="100m Backstroke">100m Backstroke</option>
            <option value="200m Backstroke">200m Backstroke</option>
            <option value="50m Breaststroke">50m Breaststroke</option>
            <option value="100m Breaststroke">100m Breaststroke</option>
            <option value="200m Breaststroke">200m Breaststroke</option>
            <option value="200m IM">200m IM</option>
            <option value="4x50m Free Relay">4x50m Free Relay</option>
            <option value="4x50m Medley Relay">4x50m Medley Relay</option>
            <option value="4x50m Mixed Free Relay">4x50m Mixed Free Relay</option>
            <option value="4x50m Mixed Medley Relay">4x50m Mixed Medley Relay</option>
          </select>
        </div>
        <div>
          <label>Gender:</label>
          <select value={gender} onChange={(e) => setGender(e.target.value)} required>
            <option value="">Select Gender</option>
            <option value="Girls">Girls</option>
            <option value="Boys">Boys</option>
          </select>
        </div>
        {entries.map((entry, index) => (
          <div key={index} className="entry">
            <div>
              <label>Name:</label>
              <input
                type="text"
                value={entry.name}
                onChange={(e) => handleEntryChange(index, 'name', e.target.value)}
                required
              />
            </div>
            <div>
              <label>Placed At:</label>
              <input
                type="text"
                value={entry.placedAt}
                onChange={(e) => handleEntryChange(index, 'placedAt', e.target.value)}
                required
              />
            </div>
            <div>
              <label>Timing:</label>
              <input
                type="text"
                value={entry.timing}
                onChange={(e) => handleEntryChange(index, 'timing', e.target.value)}
                required
              />
            </div>
            {entries.length > 1 && (
              <button type="button" onClick={() => removeEntry(index)}>Remove</button>
            )}
          </div>
        ))}
        <button type="button" onClick={addEntry}>Add Another Entry</button>
        <button type="submit">Upload</button>
      </form>
    </div>
  );
};

export default UploadResult;
