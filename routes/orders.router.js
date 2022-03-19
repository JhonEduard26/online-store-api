const express = require('express');
const faker = require('@faker-js/faker');

const router = express.Router();

router.get('/', (req, res) => {
  const orders = [];
  const { size } = req.query;
  const limit = size || 10;

  for (let i = 0; i < limit; i++) {
    orders.push({
      id: faker.faker.datatype.uuid(),
      orderDate: faker.faker.time.recent('abbr'),
      orderTotal: faker.faker.commerce.price(10, 5000, 0, '$'),
    });
  }

  res.json(orders);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  res.json({
    id,
    orderDate: faker.faker.time.recent('abbr'),
    orderTotal: faker.faker.commerce.price(10, 5000, 0, '$'),
  });
});

module.exports = router;
