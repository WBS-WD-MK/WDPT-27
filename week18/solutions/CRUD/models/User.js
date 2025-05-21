// models/User.js
import { DataTypes } from 'sequelize'; // The library provides an object to help you  define types for your model attributes.
import dbConnection from '../db/index.js'; // See we needed this
// Define the User model
const User = dbConnection.define('user', {
  // Model attributes are defined here
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default User;
