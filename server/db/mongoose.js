const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.PROD_MONGODB, { useNewUrlParser: true })
 .then(() => {
   console.log('MONGODB IS CONNECTED!')
 }, (err) => console.log("MONGODB NOT CONNECTED: ", err ));

module.exports = {
  mongoose
};
