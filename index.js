const express = require('express')
const app = express();
const dotenv = require('dotenv').config();

const PORT = process.env.PORT || 3002;

app.use((req, res, next) => {
    console.log(`[${new Date().toLocaleString()}] ${req.method} ${req.url}`);
    next();
});

app.get('/api/info', (req, res) => {
    // console.log(req);
    const serverInfo = {
        serverName: req.hostname,
        date : new Date().toLocaleString()
    }
    res.json(serverInfo).status(200);
})

app.listen(PORT, () => {
    console.log(`app is running on ${PORT}`);
})