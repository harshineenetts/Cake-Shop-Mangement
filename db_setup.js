const mongoose = require('mongoose');

const uri = 'mongodb://localhost:27017/CakeShop';
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));
