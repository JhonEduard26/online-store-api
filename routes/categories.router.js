const express = require('express');
const faker = require('@faker-js/faker');

const router = express.Router();

router.get('/', (req, res) => {
  const categories = [];
  const { size } = req.query;
  const limit = size || 10;

  for (let i = 0; i < limit; i++) {
    categories.push({
      id: faker.faker.datatype.uuid(),
      name: faker.faker.commerce.department(),
    });
  }
  res.json(categories);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  res.json({
    id,
    name: faker.faker.commerce.department(),
  });
});

module.exports = router;
