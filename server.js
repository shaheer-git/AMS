const express = require('express');
require('dotenv').config();
const indexRouter = require('./routes/index');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;
db.on('error', error => console.error(error));
db.once('open', () => console.log("Connected to mongoose"));


app.use('/', indexRouter);

app.listen(3000);