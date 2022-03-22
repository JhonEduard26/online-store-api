const express = require('express');
const { validatorHandler } = require('../middlewares/validator.handler');
const {
  getOrderSchema,
  createOrderSchema,
  updateOrderSchema,
} = require('../schemas/order.schema');
const OrdersService = require('../services/orders.service');

const router = express.Router();
const service = new OrdersService();

router.get('/', async (req, res) => {
  const orders = await service.find();
  res.json(orders);
});

router.get(
  '/:id',
  validatorHandler(getOrderSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const order = await service.findOne(id);
      if (!order) res.status(404).send('Not found');
      else res.json(order);
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  '/',
  validatorHandler(createOrderSchema, 'body'),
  async (req, res) => {
    const body = req.body;
    const newOrder = await service.create(body);
    res.status(201).json(newOrder);
  }
);

router.patch(
  '/:id',
  validatorHandler(getOrderSchema, 'params'),
  validatorHandler(updateOrderSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const { id } = req.params;
      const order = await service.update(id, body);
      res.status(200).json(order);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const rta = await service.delete(id);
    res.status(200).json(rta);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
