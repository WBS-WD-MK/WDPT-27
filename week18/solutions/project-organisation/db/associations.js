import sequelize from './index.js';
import Post from '../models/Post.js';
import User from '../models/User.js';

User.hasMany(Post);
Post.belongsTo(User);

sequelize.sync();
