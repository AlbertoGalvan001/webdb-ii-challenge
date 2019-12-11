const express = require('express');
const helmet = require('helmet');

const server = express();
const router = require('./router');

server.get('/', (req, res) => {
    res.send(`<h2>Cars API</h2>`)
});

module.exports = server;