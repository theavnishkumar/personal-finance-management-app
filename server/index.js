import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './connection.js';
import users from './models/user.js';
import expenseData from './models/expenseData.js';

dotenv.config().parsed;

const app = express();
app.use(cors({ origin: '*', optionsSuccessStatus: 200 }));
app.use(express.json());

const port = process.env.PORT || 3000;

connectDB();

app.get('/', async (req, res) => {
    try {
        const data = await users.find();
        console.log(data);
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
});

app.get('/dashboard', async (req, res) => {
    // await expenseData.create({
    //     title: "Calculator",
    //     category: "Education",
    //     amount: 900,
    //     paymentMode: "upi",
    //     expenseType: "Expense",
    //     expenseDate: new Date()
    // })
    const data = await expenseData.find();
    console.log(data)
    res.json(data);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})