const debug = require('debug')('index:db');
const mongoose = require('mongoose');

const connectDatabase = () => {
  mongoose.connect(process.env.MONGODB_URI);

  const db = mongoose.connection;
  db.once('open', () => debug('📦 Connected to Database'));
  db.on('error', err => debug('🔴 Error while connect to Database', err));
};

module.exports = { connectDatabase };
