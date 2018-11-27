const express = require('express');
const router = express.Router();
const User = require('../db/models/User');

router.get('/users', (req, res) => {
  return User.fetchAll({ withRelated: ['created', 'assigned'] })
    .then(users => {
      // console.log('this is users route', users);
      return res.json(users);
    })
    .catch(err => {
      console.log('this is err', err);
      return res.status(400).send('An error ocurred');
    })
});

router.get('/users/new', (req, res) => {
  return res.redirect('/newUserForm.html');
});

router.post('/users', (req, res) => {
  console.log('this req body', req.body);
  const { first_name, last_name, email } = req.body;

  return new User({
    first_name,
    last_name,
    email
  })
    .save()
    .then(user => {
      console.log('this new user', user);
      return res.json(user);
    })
    .catch(err => {
      return res.status(400).json({ message: err.message, code: err.code });
    });
})



module.exports = router;