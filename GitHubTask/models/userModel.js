
import Joi from 'joi';
import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  
    userName: String,
    phone: String,
    email: { type: String, unique: true }

});



export const schemaForCreateUser = Joi.object({
  name: Joi.string().min(2).required(),
  email: Joi.string().email().required(),
  phone: Joi.string().min(10).required(),
});
export const schemaForUpdateUser = Joi.object({
    name: Joi.string().min(2),
    email: Joi.string().email(),
    phone: Joi.string().min(10),
  });

  export const userModel = mongoose.model("users", userSchema);
