
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cards').del()
    .then(function () {
      // Inserts seed entries
      return knex('cards').insert([
        {
          id: 1, 
          title: 'Make A New Website',
          body: 'The S. Pistols were an English punk rock band that formed in London in 1975.',
          priority_id: 2,
          status_id: 1,
          created_by: 1,
          assigned_to: 2
        },
        {
          id: 2, 
          title: 'Air Horn Golf Prank',
          body: `I'm sorry I've got Bursitis.`,
          priority_id: 2,
          status_id: 3,
          created_by: 2,
          assigned_to: 1
        },
        {
          id: 3, 
          title: 'Build A Fort',
          body: 'Need help harvesting wood, metal, and bricks.',
          priority_id: 3,
          status_id: 1,
          created_by: 4,
          assigned_to: 2
        },
      ]);
    });
};


// id(Pk)	number	serial, not null, unique
// title	string(255)	not null
// body	string(1024)	not null
// priority_id(Fk)	number	not null
// status_id(Fk)	number	not null
// created_by(Fk)	number	not null
// assigned_to(Fk)	number	nullable
// created_at	TS w/ TZ	not null
// updated_at	TS w/ TZ	not null
