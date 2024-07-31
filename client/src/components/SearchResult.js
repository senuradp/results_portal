import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './SearchResult.css';

const SearchResult = () => {
  const [event, setEvent] = useState('');
  const [gender, setGender] = useState('');
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get('http://localhost:5200/api/search', {
        params: { event, gender },
      });
      setResults(response.data);
    } catch (error) {
      console.error('Error fetching results:', error);
    }
  };

  return (
    <div className="search-result-container">
      <button className="back-button" onClick={() => navigate('/')}>
        ← Back to Home
      </button>
      <h2>Search Result</h2>
      <form onSubmit={handleSearch}>
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
        <button type="submit">Search</button>
      </form>
      <div className="results-section">
        <h3>Results:</h3>
        <ul>
          {results.length > 0 ? (
            results.map((result) => (
              <li key={result._id}>
                {result.entries.map((entry, index) => (
                  <div key={index} className="entry-set">
                    <p><strong>Name:</strong> {entry.name}</p>
                    <p><strong>Placed At:</strong> {entry.placedAt}</p>
                    <p><strong>Timing:</strong> {entry.timing}</p>
                  </div>
                ))}
              </li>
            ))
          ) : (
            <p className="no-results">No results found</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default SearchResult;
