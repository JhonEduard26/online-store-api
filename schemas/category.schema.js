const Joi = require('joi');

const id = Joi.string().uuid();
const name = Joi.string().min(3).max(25);

const createCategorySchema = Joi.object({
  name: name.required(),
});

const getCategorySchema = Joi.object({
  id: id.required(),
});

const updateCategorySchema = Joi.object({
  name: name,
});

module.exports = {
  createCategorySchema,
  getCategorySchema,
  updateCategorySchema,
};
