const express = require('express');
const router = express.Router();
const expenseController = require('../controllers/expense.controllers');
const { verifyUserToken } = require('../auth/auth');

router.get('/expenses', verifyUserToken, expenseController.getExpenses);

router.get('/expense/:id', verifyUserToken, expenseController.getExpense);

router.post('/expense', verifyUserToken, expenseController.createExpense);

router.put('/expense/:id', verifyUserToken, expenseController.updateExpense);

router.delete('/expense/:id', verifyUserToken, expenseController.deleteExpense);

module.exports = router;
