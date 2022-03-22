const Joi = require('joi');

const id = Joi.string().uuid();
const name = Joi.string().min(2).max(20);
const price = Joi.number().min(10);
const image = Joi.string().uri();

const createProductSchema = Joi.object({
  name: name.required(),
  price: price.required(),
  image: image.required(),
});

const getProductSchema = Joi.object({
  id: id.required(),
});

const updateProductSchema = Joi.object({
  name: name,
  price: price,
  image: image,
});

module.exports = { createProductSchema, getProductSchema, updateProductSchema };
