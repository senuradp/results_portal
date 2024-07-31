const express = require('express');
const router = express.Router();
const Result = require('../models/Result');

// POST route for uploading results
router.post('/upload', async (req, res) => {
  try {
    const { event, gender, entries } = req.body;
    
    // Validate input
    if (!event || !gender || !Array.isArray(entries) || entries.length === 0) {
      return res.status(400).json({ error: 'Invalid input' });
    }
    
    // Create a new result instance
    const result = new Result({ event, gender, entries });
    
    // Save to database
    await result.save();
    
    res.status(201).json({ message: 'Result uploaded successfully' });
  } catch (err) {
    console.error('Error uploading result:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// GET route for searching results
router.get('/search', async (req, res) => {
  try {
    const { event, gender } = req.query;
  
    // Validate input
    if (!event || !gender) {
      return res.status(400).json({ error: 'Event and Gender are required' });
    }
  
    // Find results based on event and gender
    const results = await Result.find({ event, gender });
  
    if (results.length === 0) {
      return res.status(404).json({ error: 'No results found' });
    }
  
    res.status(200).json(results);
  } catch (err) {
    console.error('Error fetching results:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
