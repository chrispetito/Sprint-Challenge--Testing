const express = require("express");
const db = require("./games-model");

const router = express.Router();

router.get("/", (req, res) => {
  db.getAll()
    .then(games => {
      res.status(200).json(games);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
  const { title, genre } = req.body;
  db.insert(req.body).then(() => {
    if (!title || !genre) {
      res.status(422).json({ message: "Title and genre fields are required" });
    } else {
      res.status(201).json({ message: "Game added succesfully" });
    }
  })
  .catch(err => {
      res.status(500).json(err)
  })
});

module.exports = router;
