const express = require('express');

const server = express()

server.use(express.json())

server.get('/', (req, res) => {
    res.send({ message: 'Web Testing Sprint Challenge' })
})

module.exports = server;