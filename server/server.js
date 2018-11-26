const express = require('express');
const bodyParser = require('body-parser');
const Card = require('./db/models/Card');
const cardsRouter = require('./routes/cards');
const adminRouter = require('./routes/admin');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api/cards', cardsRouter);
app.use('/admin', adminRouter);

app.get('/', (req, res) => {
  return Card.fetchAll()
    .then(cards => {
      //const results = cards.toJSON();
      //console.log('this is cards-server', results);
      return res.json(cards);
    })
    .catch(err => {
      console.log('this err', err)
      return res.status(400).send('An error ocurred');
    })
});



module.exports = app;