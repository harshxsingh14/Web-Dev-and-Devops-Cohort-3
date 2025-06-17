const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { z } = require('zod');
const { UserModel, TodoModel } = require('./db');
const { auth, JWT_SECRET } = require('./auth');

const app = express();
app.use(express.json());

mongoose.connect('mongodb+srv://100xdevs:WvaTca0509mb90YX@cluster0.ossjd.mongodb.net/todos-app-week-7-2');

const userSchema = z.object({
    email: z.string().min(3).max(100).email(),
    password: z.string().min(3).max(100),
    name: z.string().min(3).max(100),
});

app.post('/signup', async (req, res) => {
    const validation = userSchema.safeParse(req.body);
    if (!validation.success) {
        return res.status(400).json({
            message: 'Invalid input',
            error: validation.error
        });
    }

    const { email, password, name } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        await UserModel.create({ email, password: hashedPassword, name });
        res.json({ message: 'User created successfully' });
    } catch (error) {
        res.status(400).json({ message: 'User already exists' });
    }
});

app.post('/signin', async (req, res) => {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });

    if (!user) {
        return res.status(403).json({ message: 'Invalid credentials' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
        return res.status(403).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user._id.toString() }, JWT_SECRET);
    res.json({ token, message: 'Login successful' });
});

app.post('/todo', auth, async (req, res) => {
    const { title, done } = req.body;
    await TodoModel.create({ userId: req.userId, title, done });
    res.json({ message: 'Todo created successfully' });
});

app.get('/todo', auth, async (req, res) => {
    const todos = await TodoModel.find({ userId: req.userId });
    res.json({ todos });
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});