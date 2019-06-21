const db = require("../data/dbConfig");

module.exports = {
  getAll,
  insert
};

function getAll() {
  return db("games");
}

function insert(game) {
  return db("games")
    .insert(game, "id")
    .then(games => {
      return db("games")
        .where({ id: ids[0] })
        .first();
    });
}
