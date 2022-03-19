const express = require('express');
const faker = require('@faker-js/faker');

const router = express.Router();

router.get('/', (req, res) => {
  const users = [];
  const { size } = req.query;
  const limit = size || 10;

  for (let i = 0; i < limit; i++) {
    users.push({
      id: faker.faker.datatype.uuid(),
      name: faker.faker.name.findName(),
      email: faker.faker.internet.email(),
      password: faker.faker.datatype.string(10),
    });
  }

  res.json(users);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  res.json({
    id,
    name: faker.faker.name.findName(),
    email: faker.faker.internet.email(),
    password: faker.faker.datatype.string(10),
  });
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
