const Joi = require('joi');

const id = Joi.string().uuid();
const name = Joi.string().min(2).max(20);
const email = Joi.string().email();
const password = Joi.string().min(8).max(30);

const createUserSchema = Joi.object({
  name: name.required(),
  email: email.required(),
  password: password.required(),
});

const getUserSchema = Joi.object({
  id: id.required(),
});

const updateUserSchema = Joi.object({
  name: name,
  email: email,
  password: password,
});

module.exports = { createUserSchema, getUserSchema, updateUserSchema };
