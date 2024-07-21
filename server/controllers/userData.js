import users from "../models/user.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config().parsed;


const handleUserLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await users.findOne({ email: email });
        if (!user) {
            return res.status(404).json({ msg: 'User not found' });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ msg: 'Invalid credentials' });
        }
        const token = jwt.sign({ userId: user._id, name: user.name, email: user.email }, process.env.JWT_SECRET, { expiresIn: '14d' });
        return res.status(201).json({ token });
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
}

const handleUserSignup = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const existingUser = await users.findOne({ email: email });
        if (existingUser) {
            return res.status(400).json({ msg: 'User already exists' });
        }
        const salt = await bcrypt.genSalt(10);
        const passwordHash = await bcrypt.hash(password, salt);

        await users.create({
            name,
            email,
            password: passwordHash
        });
        const token = jwt.sign({ name: name, email: email }, process.env.JWT_SECRET, { expiresIn: '14d' });
        return res.status(200).json({ token });
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
}

export { handleUserLogin, handleUserSignup }