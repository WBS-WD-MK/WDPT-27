import { createUser, deleteUser, updateUser, getUserById, getUsers } from '../controllers/users.js';
import { Router } from 'express';
const userRouter = new Router();
userRouter.get('/', getUsers);
userRouter.post('/', createUser);
userRouter.get(
  '/:id',
  (req, res, next) => {
    console.log(req.params.id);
    next();
  },
  getUserById,
);
userRouter.put('/:id', updateUser);
userRouter.delete('/:id', deleteUser);
export default userRouter;
