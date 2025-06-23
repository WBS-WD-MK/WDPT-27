import { isValidObjectId } from 'mongoose';
import Post from '../models/Post.js';

export const getAllPosts = async (req, res) => {
  const posts = await Post.find().lean().populate('author');
  res.json(posts);
};

export const createPost = async (req, res) => {
  const { sanitizedBody, userId } = req;
  const newPost = await (await Post.create({ ...sanitizedBody, author: userId })).populate('author');
  res.status(201).json(newPost);
};

export const getSinglePost = async (req, res) => {
  const {
    params: { id }
  } = req;
  if (!isValidObjectId(id)) throw new Error('Invalid id', { cause: 400 });
  const post = await Post.findById(id).lean().populate('author');
  if (!post) throw new Error(`Post with id of ${id} doesn't exist`, { cause: 404 });
  res.send(post);
};

export const updatePost = async (req, res) => {
  const {
    sanitizedBody,
    params: { id },
    userId
  } = req;
  if (!isValidObjectId(id)) throw new Error('Invalid id', { cause: 400 });
  const post = await Post.findById(id).populate('author');
  if (!post) throw new Error(`Post with id of ${id} doesn't exist`, { cause: 404 });
  // not using findByIdAndUpdate so we can check that the author is authorized to update
  if (post.author._id.toString() !== userId) throw new Error('Not authorized to update this post', { cause: 403 });
  post.set(sanitizedBody);
  await post.save();
  res.json(post);
};

export const deletePost = async (req, res) => {
  const {
    params: { id },
    userId
  } = req;
  if (!isValidObjectId(id)) throw new Error('Invalid id', { cause: 400 });
  const post = await Post.findById(id).populate('author');
  if (!post) throw new Error(`Post with id of ${id} doesn't exist`, { cause: 404 });
  if (post.author._id.toString() !== userId) throw new Error('Not authorized to delete this post', { cause: 403 });
  await Post.findByIdAndDelete(id);
  res.json({ success: `Post with id of ${id} was deleted` });
};
