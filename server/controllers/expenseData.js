import expenseData from '../models/expenseData.js';

const handleExpensePost = async (req, res) => {
    try {
        const { title, category, amount, paymentMode, expenseType, expenseDate } = req.body;
        const userId = req.userId;
        const formattedDate = new Date(expenseDate);
        if (isNaN(formattedDate)) {
            return res.status(400).send('Invalid date format');
        }
        console.log(expenseDate, `------`, formattedDate);
        const data = await expenseData.create({
            title,
            category,
            amount,
            paymentMode,
            expenseType,
            expenseDate: formattedDate,
            user: userId
        });
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
}

const handleExpenseGET = async (req, res) => {
    const userId = req.userId;
    try {
        const data = await expenseData.find({ user: userId }).sort({ expenseDate: -1 });
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
}

const handleExpenseDelete = async (req, res) => {
    try {
        const { id } = req.params;
        await expenseData.findByIdAndDelete(id);
        res.status(200).json({ msg: 'Expense deleted successfully' });
    } catch (error) {
        res.status(500).send('Server Error');
    }
}

const handleExpensePut = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, category, amount, paymentMode, expenseType, expenseDate } = req.body;
        const formattedDate = new Date(expenseDate);
        if (isNaN(formattedDate)) {
            return res.status(400).send('Invalid date format');
        }
        const data = await expenseData.findByIdAndUpdate(id, {
            title,
            category,
            amount,
            paymentMode,
            expenseType,
            expenseDate: formattedDate
        }, { new: true });
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
}

export { handleExpensePost, handleExpenseGET, handleExpenseDelete, handleExpensePut }