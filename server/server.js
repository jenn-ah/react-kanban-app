const express = require('express');
const bodyParser = require('body-parser');
const Card = require('./db/models/Card');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    return Card.fetchAll()
        .then(cards => {
            //return res.json(cards);
            console.log('this is cards,server', cards);
        })
})


module.exports = app;