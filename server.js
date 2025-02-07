// server.js
require('dotenv').config();
const express = require('express');
const axios = require('axios');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const Transaction = require('./models/Transaction');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(morgan('dev'));

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

const initializeDatabaseRoute = require('./routes/initializeDatabase');
app.use('/api', initializeDatabaseRoute);
// const transactionsRoute = require('./routes/transactions');
const listTransactionsRoute = require('./routes/listTransactions');
app.use('/api', listTransactionsRoute);
// app.use('/api', transactionsRoute);

const combinedDataRoute = require('./routes/combinedData');
app.use('/api', combinedDataRoute);
