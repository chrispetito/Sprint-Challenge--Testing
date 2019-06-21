const express = require('express')
const db = require('./games-model')

const router = express.Router()

router.get('/', (req, res) => {
    db.getAll().then(games => {
        res.status(200).json(games)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

router.post('/', (req, res) => {
    db.insert(req.body).then(()=> {
        res.status(201).json({ message: 'Game added successfully' })
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

module.exports = router;