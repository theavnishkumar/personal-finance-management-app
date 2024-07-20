import express from 'express';
import { handleExpensePost, handleExpenseGET, handleExpenseDelete, handleExpensePut } from '../controllers/expenseData.js';
const router = express.Router();

router.get('/', handleExpenseGET)
router.post('/', handleExpensePost)
router.put('/:id', handleExpensePut)
router.delete('/:id', handleExpenseDelete)

export { router };