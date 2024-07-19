import expenseData from '../models/expenseData.js';

const handleExpensePost = async (req, res) => {
    try {
        const { title, category, amount, paymentMode, expenseType, expenseDate } = req.body;
        const data = await expenseData.create({
            title,
            category,
            amount,
            paymentMode,
            expenseType,
            expenseDate,
        });
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
}

const handleExpenseGET = async (req, res) => {
    try {
        const data = await expenseData.find().sort({ expenseDate: -1 });
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
}

export { handleExpensePost, handleExpenseGET }