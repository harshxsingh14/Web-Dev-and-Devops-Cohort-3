const express = require('express');
const app = express();
let requestCount = 0;

function countRequests(req, res, next) {
    requestCount++;
    next();
}

app.use(countRequests);

app.get('/', (req, res) => {
    res.send('Hi there!');
});

app.get('/requestCount', (req, res) => {
    res.send({
        totalRequests: requestCount
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
