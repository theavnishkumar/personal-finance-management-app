import express from 'express';
const app = express();
import dotenv from 'dotenv';
dotenv.config().parsed;
import connectDB from './connection.js';
import cors from 'cors';
app.use(cors({ origin: '*', optionsSuccessStatus: 200 }));
const port = process.env.PORT || 3000;
import users from './models/user.js';
import expenseData from './models/expenseData.js';
app.use(express.json());

connectDB();

app.get('/', async (req, res) => {
    const data = await users.find();
    console.log(data)
    res.json(data);
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