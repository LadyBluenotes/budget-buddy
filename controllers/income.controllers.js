const Income = require('../models/income.models');

exports.getIncomes = (req, res) => {
  Income.find()
    .then((incomes) => res.json(incomes))
    .catch((err) => res.status(400).json({ err }));
};

exports.getIncome = (req, res) => {
    Income.findById(req.params.id)
    .then((income) => res.json(income))
    .catch((err) => res.status(400).json({ err }));
};

exports.createIncome = (req, res) => {
  const income = new Income({
    name: req.body.name,
    value: req.body.value,
    month: req.body.month,
    year: req.body.year,
    user: req.body.user,
  });

  income
    .save()
    .then((income) => res.json(income))
    .catch((err) => res.status(400).json({ err }));
};

exports.updateIncome = (req, res) => {
    Income.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((income) => res.json(income))
    .catch((err) => res.status(400).json({ err }));
};

exports.deleteIncome = (req, res) => {
    Income.findByIdAndDelete(req.params.id)
    .then(() => res.json({ message: 'Income deleted successfully' }))
    .catch((err) => res.status(400).json({ err }));
};
