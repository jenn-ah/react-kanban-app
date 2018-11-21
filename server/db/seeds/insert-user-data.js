
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 1, 
          first_name: 'Johnny',
          last_name: 'Rotten',
          email: 'jrotten@sp.com'
        },
        {
          id: 2, 
          first_name: 'Sid',
          last_name: 'Vicious',
          email: 'svicious@sp.com'
        },
        {
          id: 3, 
          first_name: 'Glen',
          last_name: 'Matlock',
          email: 'gmatlock@sp.com'
        },
        {
          id: 4, 
          first_name: 'Steve',
          last_name: 'Jones',
          email: 'sjones@sp.com'
        },
        {
          id: 5, 
          first_name: 'Paul',
          last_name: 'Cook',
          email: 'pcook@sp.com'
        }
      ]);
    });
};





// id(Pk)	number	serial, not null, unique
// first_name	string	not null
// last_name	string	not null
// email	string	not null
// created_at	TS w/ TZ	not null
// updated_at	TS w/ TZ	not null