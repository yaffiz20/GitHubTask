const Joi = require('joi');
const mongoose =require('mongoose');
const userSchema = new mongoose.Schema({
    email: String,
    userName: String,
    phone: String
})
module.exports = mongoose.model("user", userSchema);

exports.schemaForCreateUser = Joi.object({
  name: Joi.string().min(2).required(),
  email: Joi.string().email().required(),
  phone: Joi.string().min(10).required(),
});
exports.schemaForUpdateUser = Joi.object({
    name: Joi.string().min(2),
    email: Joi.string().email(),
    phone: Joi.string().min(10),
  });
