const Expense = require('../models/expense.models');

exports.getExpenses = (req, res) => {
  Expense.find()
    .then((expenses) => res.json(expenses))
    .catch((err) => res.status(400).json({ err }));
};

exports.getExpense = (req, res) => {
  Expense.findById(req.params.id)
    .then((expense) => res.json(expense))
    .catch((err) => res.status(400).json({ err }));
};

exports.createExpense = (req, res) => {
  const expense = new Expense({
    name: req.body.name,
    value: req.body.value,
    user: req.body.user,
  });

  expense
    .save()
    .then((expense) => res.json(expense))
    .catch((err) => res.status(400).json({ err }));
};

exports.updateExpense = (req, res) => {
  Expense.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((expense) => res.json(expense))
    .catch((err) => res.status(400).json({ err }));
};

exports.deleteExpense = (req, res) => {
  Expense.findByIdAndDelete(req.params.id)
    .then(() => res.json({ message: 'Expense deleted successfully' }))
    .catch((err) => res.status(400).json({ err }));
};
