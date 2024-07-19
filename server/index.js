import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './connection.js';
// import users from './models/user.js';
// import expenseData from './models/expenseData.js';
import { router as expenseRouter } from './routes/expense.js';
import { userRouter } from './routes/user.js';

dotenv.config().parsed;

const app = express();
app.use(cors({ origin: '*', optionsSuccessStatus: 200 }));
app.use(express.json());

const port = process.env.PORT || 3000;

connectDB();

app.get('/', async (req, res) => {
    res.json({ msg: 'Welcome to Expense Tracker API' });
});

// app.get('/dashboard', async (req, res) => {

// });
app.use('/api/expenses', expenseRouter);
app.use('/api', userRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})