import { createPost, deletePost, updatePost, getPostById, getPosts } from '../controllers/posts.js';
import { Router } from 'express';
const postRouter = new Router();
postRouter.use((req, res, next) => {
  console.log('Hello');
  req.x = 10;
  next();
});
postRouter.get('/', getPosts);
postRouter.post('/', createPost);
postRouter.get('/:id', getPostById);
postRouter.put('/:id', updatePost);
postRouter.delete('/:id', deletePost);
export default postRouter;
