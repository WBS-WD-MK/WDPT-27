import Post from '../models/Post.js';
import User from '../models/User.js';
import asyncHandler from '../utils/asyncHandler.js';
import ErrorResponse from '../utils/errorResponse.js';
export const getPosts = async (req, res) => {
  const posts = await Post.findAll({ include: User });
  res.json(posts);
};

export const createPost = asyncHandler(async (req, res) => {
  const { body } = req;
  const post = await Post.create(body);
  const user = await post.getUser();
  post.dataValues.user = user;
  res.json(post);
});

export const getPostById = asyncHandler(async (req, res) => {
  const {
    params: { id },
  } = req;
  const post = await Post.findByPk(id, { include: User });
  if (!post) throw new ErrorResponse('Post not found');
  res.json(post);
});

export const updatePost = asyncHandler(async (req, res) => {
  const {
    body,
    params: { id },
  } = req;
  const post = await Post.findByPk(id);
  if (!post) throw new ErrorResponse('Post not found');
  await post.update(body);
  const user = await post.getUser();
  post.dataValues.user = user;
  res.json(post);
});

export const deletePost = asyncHandler(async (req, res) => {
  const {
    params: { id },
  } = req;
  const post = await Post.findByPk(id);
  if (!post) throw new ErrorResponse('Post not found');
  await post.destroy();
  res.json({ message: 'Post deleted' });
});
