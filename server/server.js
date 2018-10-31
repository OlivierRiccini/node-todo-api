var express = require('express');
var bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  console.log(req.body);
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos});
  }, (e) => {
    res.status(400).send(e);
  });
});

// GET /todos/:id
app.get('/todos/:id', (req, res) => {
  var id = req.params.id;

  // Valid id useing isValid and send()
  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }
  // findById
  Todo.findById(id).then((todo) => {
    // succes
    if (!todo) {
      // if no todo - send back 404 with empty body
      return res.status(404).send();
    }
      // send it back
    res.status(200).send({todo});
  }).catch((e) => {
    // error
      // 400 - adn send empty body back
      res.status(400).send();
  });
});

app.listen(3000, () => {
  console.log('Starting on port 3000');
});


module.exports = {app};
