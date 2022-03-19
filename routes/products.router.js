const express = require('express');
const faker = require('@faker-js/faker');

const router = express.Router();

router.get('/', (req, res) => {
  const products = [];
  const { size } = req.query;
  const limit = size || 10;

  for (let i = 0; i < limit; i++) {
    products.push({
      id: faker.faker.datatype.uuid(),
      name: faker.faker.commerce.productName(),
      price: faker.faker.commerce.price(10, 5000, 0, '$'),
      image: faker.faker.image.food(320),
    });
  }
  res.json(products);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  res.json({
    id,
    name: faker.faker.commerce.productName(),
    price: faker.faker.commerce.price(10, 2000, 0, '$'),
    image: faker.faker.image.food(320),
  });
});

router.post('/', (req, res) => {
  const body = req.body;
  res.json({
    message: 'created',
    data: body,
  });
});

module.exports = router;
