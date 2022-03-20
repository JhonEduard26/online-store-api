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
  const newOrder = service.create(body);
  res.status(201).json(newOrder);
});

router.patch('/:id', (req, res) => {
  const body = req.body;
  const { id } = req.params;
  const order = service.update(id, body);
  res.status(200).json(order);
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const rta = service.delete(id);
  res.status(200).json(rta);
});

module.exports = router;
