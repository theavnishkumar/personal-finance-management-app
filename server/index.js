import express from 'express';
const app = express();
import dotenv from 'dotenv';
dotenv.config().parsed;
import connectDB from './connection.js';
import users from './models/user.js';
import cors from 'cors';
app.use(cors({ origin: '*', optionsSuccessStatus: 200 }));
const port = process.env.PORT || 3000;
app.use(express.json());

connectDB();

app.get('/', async (req, res) => {
    const data = await users.find();
    console.log(data)
    res.json(data);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})