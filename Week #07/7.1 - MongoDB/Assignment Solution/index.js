const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const { UserModel, TodoModel } = require("./db");

const app = express();
app.use(express.json());

mongoose.connect("mongodb+srv://100xdevs:WvaTca0509mb90YX@cluster0.ossjd.mongodb.net/todo-harkirat-2222");

const JWT_SECRET = "hellobacchomajaloclasska";

app.post("/signup", async (req, res) => {
    const { email, password, name } = req.body;

    try {
        await UserModel.create({ email, password, name });
        res.json({ message: "You are signed up!" });
    } catch (error) {
        res.status(400).json({ message: "User already exists!" });
    }
});

app.post("/signin", async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await UserModel.findOne({ email, password });

        if (user) {
            const token = jwt.sign({ id: user._id.toString() }, JWT_SECRET);
            res.json({ token, message: "You are signed in!" });
        } else {
            res.status(403).json({ message: "Invalid Credentials!" });
        }
    } catch (error) {
        res.status(500).json({ message: "An error occurred during signin." });
    }
});

function auth(req, res, next) {
    const token = req.headers.authorization;

    try {
        const decodedData = jwt.verify(token, JWT_SECRET);

        if (decodedData) {
            req.userId = decodedData.id;
            next();
        } else {
            res.status(403).json({ message: "Invalid Token!" });
        }
    } catch (error) {
        res.status(403).json({ message: "Invalid Token!" });
    }
}

app.post("/todo", auth, async (req, res) => {
    const { title, done } = req.body;
    const userId = req.userId;

    try {
        await TodoModel.create({ userId, title, done });
        res.status(201).json({ message: "Todo created!" });
    } catch (error) {
        res.status(500).json({ message: "Error creating todo" });
    }
});

app.get("/todo", auth, async (req, res) => {
    const userId = req.userId;

    try {
        const todos = await TodoModel.find({ userId });
        res.status(200).json(todos);
    } catch (error) {
        res.status(500).json({ message: "Error fetching todos" });
    }
});

app.listen(3000);