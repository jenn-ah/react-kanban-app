const express = require('express');
const bodyParser = require('body-parser');
const Card = require('./db/models/Card');
const cardsRouter = require('./routes/cards');
const adminRouter = require('./routes/admin');

const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api/cards', cardsRouter);
app.use('/admin', adminRouter);

app.get('/', (req, res) => {
  return Card.fetchAll()
    .then(cards => {
      return res.json(cards);
    })
    .catch(err => {
      return res.status(500).json({ message: err.message, code: err.code });
    })
});


module.exports = app;