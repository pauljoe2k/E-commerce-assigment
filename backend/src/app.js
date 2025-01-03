import express from 'express';
import userRouter from './routes/user.route';

if (process.env.NODE_ENV !== 'PRODUCTION') {
  require('dotenv').config({
    path: './src/config/.env',
  });
}

const app = express();

app.get('/', (req, res) => {
  return res.send('Welcome to backend');
});

app.use('/user', userRouter);

// connecting the database and running the server

export default app;