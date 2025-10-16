const express = require('express');
const app = express();

function requestLogger(req, res, next) {
    const currentTime = new Date();
    console.log(req.method);
    console.log(`${req.protocol}://${req.get('host')}${req.url}`);
    console.log(currentTime);
    next();
}

app.use(requestLogger);

app.get('*', (req, res) => {
    res.send("Hi there!");
});

app.post('*', (req, res) => {
    res.send("Hello!");
});

app.put('*', (req, res) => {
    res.send("Welcome!");
});

app.delete('*', (req, res) => {
    res.send("Goodbye!");
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
