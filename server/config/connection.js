const mongoose = require('mongoose');

<<<<<<< HEAD
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/know-more-tiers', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
=======
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/know-more-tiers',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
  }
);
>>>>>>> origin

module.exports = mongoose.connection;
