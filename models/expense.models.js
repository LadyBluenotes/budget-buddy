const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  value: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    get: function(value) {
      return value.toISOString().slice(0, 10);
    },
    set: function(value) {
      return new Date(value);
    },
    default: Date.now
  },
  user: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User'
  }
});

module.exports = mongoose.model('Expense', expenseSchema);
