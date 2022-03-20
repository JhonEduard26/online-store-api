const express = require('express');
const OrdersService = require('../services/orders.service');

const router = express.Router();
const service = new OrdersService();

router.get('/', (req, res) => {
  const orders = service.find();
  res.json(orders);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const order = service.findOne(id);
  if (!order) res.status(404).send('Not found');
  else res.json(order);
});

router.post('/', (req, res) => {
  const body = req.body;
  res.status(201).json({
    message: 'created',
    data: body,
  });
});

router.patch('/:id', (req, res) => {
  const body = req.body;
  const { id } = req.params;

  res.json({
    message: 'updated',
    data: body,
    id,
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;

  res.json({
    message: 'deleted',
    id,
  });
});

module.exports = router;
