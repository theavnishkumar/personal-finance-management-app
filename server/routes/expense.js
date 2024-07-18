import express from 'express';
import expenseData from '../models/expenseData.js';
const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const { title, category, amount, paymentMode, expenseType, expenseDate } = req.body;
        const data = await expenseData.create({
            title,
            category,
            amount,
            paymentMode,
            expenseType,
            expenseDate
        });
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
});

export { router };