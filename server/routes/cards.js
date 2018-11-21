const express = require('express');
const router = express.Router();
const Card = require('../db/models/Card');


router.route('/')
  .get((req, res) => {
    return Card.fetchAll()
      .then(cards => {
        return res.json(cards);
      })
      .catch(err => {
        return res.status(400).send('An error ocurred');
      })
  })
  .post((req, res) => {
    const { title, body, priority, status, created_by, assigned_to } = req.body;
    return new Card({
      title,
      body,
      priority,
      status,
      created_by,
      assigned_to
    })
      .save()
      .then(card => {
        return res.json(card);
      })
      .catch(err => {
        return res.status(400).json({ message: err.message, code: err.code });
      });
  });



module.exports = router;