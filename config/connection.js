const mongoose = require('mongoose');
// Wrap Mongoose around local connection
mongoose.connect('mongodb://localhost:27017/usersDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
// Export the connection
module.exports = mongoose.connection;