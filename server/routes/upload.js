// const express = require('express');
// const router = express.Router();
// const Result = require('../models/Result');

// router.post('/upload', async (req, res) => {
//   try {
//     const { event, gender, entries } = req.body;
//     if (!Array.isArray(entries) || entries.length === 0) {
//       return res.status(400).json({ message: 'Entries should be a non-empty array' });
//     }
//     const newResult = new Result({ event, gender, entries });
//     await newResult.save();
//     res.status(201).send('Result uploaded successfully');
//   } catch (error) {
//     res.status(400).send(error.message);
//   }
// });

// module.exports = router;
