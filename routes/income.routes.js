const express = require('express');
const router = express.Router();
const incomeController = require('../controllers/income.controllers');
const { verifyUserToken } = require('../auth/auth');

router.get('/incomes', verifyUserToken, incomeController.getIncomes);

router.get('/income/:id', verifyUserToken, incomeController.getIncome);

router.post('/income', verifyUserToken, incomeController.createIncome);

router.put('/income/:id', verifyUserToken, incomeController.updateIncome);

router.delete('/income/:id', verifyUserToken, incomeController.deleteIncome);

module.exports = router;
