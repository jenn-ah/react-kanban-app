const express = require('express');
const router = express.Router();
const Card = require('../db/models/Card');
const validator = require('validator');
//const Status = require('../db/models/Status');


router.route('/')
  .get((req, res) => {
    //console.log('get reqbody', req.body);
    return Card.fetchAll({ withRelated: ['priority', 'status', 'createdBy', 'assignedTo'] })
      .then(cards => {
        //console.log('this is cards route', cards);
        return res.json(cards);
      })
      .catch(err => {
        console.log('this is err', err);
        return res.status(400).send('An error ocurred');
      })
  })
  .post((req, res) => {
    // console.log('this req body', req.body);
    const { title, body, priority_id, status_id, created_by, assigned_to } = req.body;
    const parsedPriority = parseInt(priority_id);
    const parsedStatus = parseInt(status_id);
    const parsedCreated = parseInt(created_by);
    const parsedAssigned = parseInt(assigned_to);
    //console.log('this status', status_id);
    return new Card({
      title,
      body,
      priority_id: parsedPriority,
      status_id: parsedStatus,
      created_by: parsedCreated,
      assigned_to: parsedAssigned
    })
      .save()
      .then(card => {
        return card.refresh({ withRelated: ['priority', 'status', 'createdBy', 'assignedTo'] })
      })
      .then(card => {
        //console.log('this card', card);
        return res.json(card);
      })
      .catch(err => {
        return res.status(400).json({ message: err.message, code: err.code });
      });
  })
  .put((req, res) => {
    const { id, title, body, priority, status, created_by, assigned_to } = req.body;
    const parsedId = parseInt(id);
    const parsedPriority = parseInt(priority);
    const parsedStatus = parseInt(status);
    const parsedCreated = parseInt(created_by);
    const parsedAssigned = parseInt(assigned_to);
    // console.log('this reqbody', req.body);
    return new Card()
      .where({ id: parsedId })
      .fetch({ require: true })
      .then(card => {
        // console.log('this is putcard', card);
        card.save(
          // [{
          {
            title: title,
            body: body,
            priority_id: parsedPriority,
            status_id: parsedStatus,
            created_by: parsedCreated,
            assigned_to: parsedAssigned
          })
          // }], 
          //   [{ patch: true }]
          //   )
          .then(card => {
            //console.log('after first then, putCard', card);
            return card.refresh({ withRelated: ['priority', 'status', 'createdBy', 'assignedTo'] })
          })
          .then(card => {
            //console.log('this card', card);
            return res.json(card);
          })
          .catch(err => {
            return res.status(400).json({ message: err.message, code: err.code });
          });
      })
  })
  .delete((req, res) => {
    //console.log('this delete req', req);
    const { id } = req.body;
   // console.log('delete id', id);
    const parsedId = parseInt(id);
    return new Card()
      .where({ id: parsedId })
      .fetch({ require: true })
      .then(card => {
        return card.destroy({
          id: parsedId
        })
      })
      .then(() => {
        return res.send(`Card #${id} has been deleted`);
      })
      .catch(err => console.error(err));
  })



module.exports = router;