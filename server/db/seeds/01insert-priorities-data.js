
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('priorities').del()
    .then(function () {
      // Inserts seed entries
      return knex('priorities').insert([
        {
          id: 1, 
          name: 'Low',
          rank: 1
        },
        {
          id: 2, 
          name: 'Medium',
          rank: 2
        },
        {
          id: 3, 
          name: 'High',
          rank: 3
        },
        {
          id: 4, 
          name: 'Urgent',
          rank: 4
        },
        {
          id: 5, 
          name: 'Emergency',
          rank: 5
        }
      ]);
    });
};
