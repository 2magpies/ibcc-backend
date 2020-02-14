const mongoose = require('mongoose');

mongoose.Promise = Promise;

let mongoURI = '';
if (process.env.NODE_ENV === 'production') {
  mongoURI = process.env.DB_URL;
} else {
  mongoURI = 'mongodb://localhost/ibcc';
}

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })
  .then(instance =>
    console.log(`Connected to db: ${instance.connections[0].name}`)
  )
  .catch(error => console.log('Connection failed!', error));

module.exports = mongoose;
