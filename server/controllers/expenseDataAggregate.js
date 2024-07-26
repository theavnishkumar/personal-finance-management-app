import expenseData from '../models/expenseData.js';

const handleExpenseDailyGET = async (req, res) => {
    const { daily } = req.params;
    let startTime = "T00:00:00.000Z";
    let endTime = "T23:59:59.999Z";
    const parsedDate = new Date(daily);
    if (isNaN(parsedDate)) {
        return res.status(400).send('Invalid date format');
    }
    const start = new Date(daily + startTime);
    const end = new Date(daily + endTime);
    try {
        const expenses = await expenseData.find({
            expenseDate: { $gte: start, $lte: end }
        });
        return res.json(expenses);
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

const handleExpenseMonthlyGET = async (req, res) => {
    const userId = req.userId;
    const { month } = req.params;

    // Validate month
    const monthInt = parseInt(month, 10);

    if (isNaN(monthInt) || monthInt < 1 || monthInt > 12) {
        return res.status(400).send('Invalid month format');
    }

    const today = new Date();
    const year = today.getFullYear();
    const startOfMonth = new Date(year, monthInt - 1, 1);
    const endOfMonth = new Date(year, monthInt, 0, 23, 59, 59, 999);

    try {
        const expenses = await expenseData.find({
            user: userId,
            expenseDate: { $gte: startOfMonth, $lte: endOfMonth }
        });
        return res.json(expenses);
    } catch (error) {
        return res.status(500).send(error.message);
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