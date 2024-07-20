import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './connection.js';
import { router as expenseRouter } from './routes/expense.js';
import { userRouter } from './routes/user.js';
import { auth } from './middleware/auth.js';

dotenv.config().parsed;

const app = express();
app.use(cors({ origin: '*', optionsSuccessStatus: 200 }));
app.use(express.json());

const port = process.env.PORT || 3000;

connectDB();

app.get('/', async (req, res) => {
    res.json({ msg: 'Welcome to Expense Tracker API' });
});
app.use('/api/expenses', auth, expenseRouter);
app.use('/api', userRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})