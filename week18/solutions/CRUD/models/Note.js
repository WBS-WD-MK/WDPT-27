import { DataTypes } from 'sequelize';
import dbConnection from '../db/index.js';

const Note = dbConnection.define('note', {
  content: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Note;
