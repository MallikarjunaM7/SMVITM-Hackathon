// Database models
// Example for Mongoose (MongoDB):

// import mongoose from 'mongoose';
// 
// const UserSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//   },
// }, {
//   timestamps: true,
// });
// 
// export const User = mongoose.model('User', UserSchema);

// Example for Sequelize (SQL databases):
// import { DataTypes } from 'sequelize';
// import sequelize from '../config/database.js';
// 
// export const User = sequelize.define('User', {
//   name: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   email: {
//     type: DataTypes.STRING,
//     allowNull: false,
//     unique: true,
//   },
// });

console.log('Models loaded');
export default {};

