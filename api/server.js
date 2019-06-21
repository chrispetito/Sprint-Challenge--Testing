const express = require('express');

const server = express()

const gamesRouter = require('../games/games-router')

server.use(express.json())

server.use('/api/games', gamesRouter)

server.get('/', (req, res) => {
    res.send({ message: 'Web Testing Sprint Challenge' })
})

module.exports = server;