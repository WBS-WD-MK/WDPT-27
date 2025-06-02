import express from 'express';
import './db/associations.js';
import postRouter from './routers/postRouter.js';
import userRouter from './routers/userRouter.js';
import errorHandler from './middleware/errorHandler.js';
const app = express();
const port = process.env.PORT || 8080;
app.use((req, res, next) => {
  console.log('Application-level middleware');
  next();
});
app.use(express.json());
app.use('/api/users', userRouter);
app.use('/api/posts', postRouter);
app.use(errorHandler);
app.use('*', (req, res, next) => {
  res.status(404).json({ message: 'not found' });
});
app.listen(port, () => console.log(`Server is running on port ${port}`));
