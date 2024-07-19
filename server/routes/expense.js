import express from 'express';
// import expenseData from '../models/expenseData.js';
import { handleExpensePost, handleExpenseGET } from '../controllers/expenseData.js';
const router = express.Router();

router.get('/', handleExpenseGET)
router.post('/', handleExpensePost)

export { router };