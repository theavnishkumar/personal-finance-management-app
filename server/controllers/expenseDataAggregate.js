import expenseData from '../models/expenseData.js';

const handleExpenseDailyGET = async (req, res) => {
    const { daily } = req.params;
    // Parse the date from the URL parameter
    const parsedDate = new Date(daily);
    if (isNaN(parsedDate)) {
        return res.status(400).send('Invalid date format');
    }
    try {
        const expenses = await expenseData.find({
            expenseDate: parsedDate
        });
        return res.json(expenses);
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

const handleExpenseMonthlyGET = (req, res) => {
    try {
        const { month } = req.params;
        const dailyExpenses = expenseData.find({ expenseDate: 20240722 });

        console.log(month);
        return res.json(dailyExpenses);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

const handleExpenseYearlyGET = (req, res) => {
    try {
        const { year } = req.params;
        const dailyExpenses = expenseData.find({ expenseDate: 20240722 });

        console.log(year);
        return res.json(dailyExpenses);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export { handleExpenseDailyGET, handleExpenseMonthlyGET, handleExpenseYearlyGET }