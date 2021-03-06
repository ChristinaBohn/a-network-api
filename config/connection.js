const { connect, connection } = require('mongoose');

connect( 'mongodb://localhost/aNetworkApi', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB!');
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = connection;