const mongoose = require('mongoose');

const resultSchema = new mongoose.Schema({
  event: { type: String, required: true },
  gender: { type: String, required: true },
  entries: [{
    name: { type: String, required: true },
    placedAt: { type: String, required: true },
    timing: { type: String, required: true }
  }]
});

const Result = mongoose.model('Result', resultSchema);

module.exports = Result;
