require('dotenv').config();
const debug = require('debug')('index:start');
const cors = require('cors');
const express = require('express');
const app = express();

// Database Connection
const db = require('./config/db');
db.connectDatabase();

// Middleware
app.use(express.json());
app.use(cors());
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
  res.status(200).send('Welcome to Loadr Api.');
});
app.get('/cron', require('./services/fileCleaner').clean);

app.use('/api/files', require('./routes/files'));
app.use('/send', require('./routes/send'));
app.use('/download', require('./routes/download'));

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`🔥 Server running on http://localhost:${port}`));
