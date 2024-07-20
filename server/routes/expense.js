import express from 'express';
import { handleExpensePost, handleExpenseGET, handleExpenseDelete } from '../controllers/expenseData.js';
const router = express.Router();

router.get('/', handleExpenseGET)
router.post('/', handleExpensePost)
router.delete('/:id', handleExpenseDelete)

export { router };