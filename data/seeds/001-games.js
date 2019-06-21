
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('games').del()
    .then(function () {
      // Inserts seed entries
      return knex('games').insert([
        {title: 'example', genre: 'action/adventure', releaseYear: 1980},
        {title: 'example2', genre: 'action/adventure', releaseYear: 1980},
        {title: 'example3', genre: 'action/adventure', releaseYear: 1980}
      ]);
    });
};
