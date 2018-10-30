// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

const dbUrl = 'mongodb://localhost:27017/TodoApp';
const connectOptions = { useNewUrlParser: true };

MongoClient.connect(dbUrl, connectOptions, (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  // db.collection('Todos').find({
  //   _id: new ObjectID('5bd8c35fb68e845f3ff3f6b4')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  //  db.collection('Todos').find().count().then((count) => {
  //     console.log(`Todos count: ${count}`);
  //   }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  db.collection('Users').find({name: 'Olivier'}).toArray().then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    if (err) {
      console.log('Unable to find user', err);
    }
  });

  // client.close();
});
