const mongoose = require('mongoose');

const incomeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  value: {
    type: Number,
    required: true
  },
  month: {
    type: Number,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User'
  }
});

module.exports = mongoose.model('Income', incomeSchema);
