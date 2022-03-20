const express = require('express');
const OrdersService = require('../services/orders.service');

const router = express.Router();
const service = new OrdersService();

router.get('/', async (req, res) => {
  const orders = await service.find();
  res.json(orders);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const order = await service.findOne(id);
  if (!order) res.status(404).send('Not found');
  else res.json(order);
});

router.post('/', async (req, res) => {
  const body = req.body;
  const newOrder = await service.create(body);
  res.status(201).json(newOrder);
});

router.patch('/:id', async (req, res) => {
  try {
    const body = req.body;
    const { id } = req.params;
    const order = await service.update(id, body);
    res.status(200).json(order);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const rta = await service.delete(id);
    res.status(200).json(rta);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
});

module.exports = router;
