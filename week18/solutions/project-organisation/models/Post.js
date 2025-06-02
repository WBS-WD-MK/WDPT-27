import { DataTypes } from 'sequelize';
import sequelize from '../db/index.js';
const Post = sequelize.define('post', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

export default Post;
