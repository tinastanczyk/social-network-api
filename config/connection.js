const { connect, connection, Mongoose } = require('mongoose');
// Wrap Mongoose around local connection
Mongoose.connect('mongodb://localhost:27017/usersDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
// Export the connection
module.exports = mongoose.connection;