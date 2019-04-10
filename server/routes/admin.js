const express = require('express');
const router = express.Router();
const User = require('../db/models/User');
const validator = require('validator');

router.get('/users', (req, res) => {
  return User.fetchAll({ withRelated: ['created', 'assigned'] })
    .then(users => {
      return res.json(users);
    })
    .catch(err => {
      console.log('this is err', err);
      return res.status(400).send('An error occurred');
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



router.get('/users/:id', (req, res) => {
  const grabId = req.params.id;

  return new User({ id: grabId })
    .fetch({ 
      columns: ['id', 'first_name', 'last_name', 'email'],
      withRelated: ['created', 'assigned']
    })
    .then(user => {
      if(!user) {
        res.status(404).json({ message: `User # ${grabId} not found.`})
      } else {
        //console.log('get user id route', user);
        const userObj = user.toJSON();
        return res.send(userObj);
      }
    })
    .catch(err => console.error(err));
})


module.exports = router;