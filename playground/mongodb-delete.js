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

  // deleteMany
  // db.collection('Todos').deleteMany({text: 'Something to do'}).then((result) => {
  //   console.log(result);
  // });

  // // deleteOne
  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  // // findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Users').deleteMany({name: 'Olivier'});

  // db.collection('Users').findOneAndDelete({
  //   _id: new ObjectID('5bd8beef2738ff11824080dd')
  // }).then((result) => {
  //   console.log(JSON.stringify(result, undefined, 2));
  // });

  // client.close();
});

