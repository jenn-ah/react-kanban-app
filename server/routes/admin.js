const express = require('express');
const router = express.Router();
const User = require('../db/models/User');

router.route('/')
  .get((req, res) => {
    return User.fetchAll({ withRelated: ['created', 'assigned'] })
      .then(users => {
       // console.log('this is users route', users);
        return res.json(users);
      })
      .catch(err => {
        console.log('this is err', err);
        return res.status(400).send('An error ocurred');
      })
  })

module.exports = router;