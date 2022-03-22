const Joi = require('joi');

const id = Joi.string().uuid();
const orderDate = Joi.string();
const orderTotal = Joi.number().positive().min(10);

const createOrderSchema = Joi.object({
  orderDate: orderDate.required(),
  orderTotal: orderTotal.required(),
});

const getOrderSchema = Joi.object({
  id: id.required(),
});

const updateOrderSchema = Joi.object({
  orderDate: orderDate,
  orderTotal: orderTotal,
});

module.exports = { createOrderSchema, getOrderSchema, updateOrderSchema };
