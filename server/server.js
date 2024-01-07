const express = require('express');
require('dotenv').config();
const indexRouter = require('./routes/index');
const userRouter = require('./routes/user');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
mongoose.set('strictQuery', false);
mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;
db.on('error', error => console.error(error));
db.once('open', () => console.log("Connected to mongoose"));


app.use('/', indexRouter);
app.use('/users', userRouter);

app.listen(3000);