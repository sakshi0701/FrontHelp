import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import chalk from 'chalk';
import dotenv from 'dotenv';
dotenv.config();

import postRoutes from './routes/posts.js';
import userRouter from './routes/user.js';

const app = express();

app.use(bodyParser.json({ limit : "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit : "30mb", extended: true}));
app.use(cors());

app.use('/posts', postRoutes);
app.use('/user',userRouter);

const PORT = process.env.PORT || 5000;

mongoose.connect('mongodb://localhost/base', {useNewUrlParser: true,useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log(chalk.black.bgGrey.italic("We are connected!"));
});

app.listen(PORT, () => {
    console.log(chalk.black.bgCyan(`Server running at ${PORT}`));
  });