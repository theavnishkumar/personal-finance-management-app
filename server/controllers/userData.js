import users from "../models/user.js";
import bcrypt from 'bcrypt';

const handleUserLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await users.findOne({ email: email });
        if (!user) {
            res.status(404).json({ msg: 'User not found' });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ msg: 'Invalid credentials' });
        }
        res.status(200).json({ msg: 'User found' });
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
        res.status(200).json({ msg: 'User created successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
}

export { handleUserLogin, handleUserSignup }