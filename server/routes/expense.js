import express from 'express';
import { handleExpensePost, handleExpenseGET, handleExpenseDelete, handleExpensePut } from '../controllers/expenseData.js';

import { handleExpenseDailyGET, handleExpenseMonthlyGET, handleExpenseYearlyGET } from '../controllers/expenseDataAggregate.js';
const router = express.Router();

router.get('/', handleExpenseGET)
router.post('/', handleExpensePost)
router.put('/:id', handleExpensePut)
router.delete('/:id', handleExpenseDelete)

router.get('/daily/:daily', handleExpenseDailyGET)
router.get('/monthly/:month', handleExpenseMonthlyGET)
router.get('/yearly/:year', handleExpenseYearlyGET)

export { router };