const express = require('express');
const faker = require('@faker-js/faker');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello from my server on Express');
});

app.get('/products', (req, res) => {
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

app.get('/products/:id', (req, res) => {
  const { id } = req.params;

  res.json({
    id,
    name: faker.faker.commerce.productName(),
    price: faker.faker.commerce.price(10, 2000, 0, '$'),
    image: faker.faker.image.food(320),
  });
});

app.get('/categories', (req, res) => {
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

app.get('/categories/:id', (req, res) => {
  const { id } = req.params;

  res.json({
    id,
    name: faker.faker.commerce.department(),
  });
});

app.get('/users', (req, res) => {
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

app.get('/users/:id', (req, res) => {
  const { id } = req.params;

  res.json({
    id,
    name: faker.faker.name.findName(),
    email: faker.faker.internet.email(),
    password: faker.faker.datatype.string(10),
  });
});

app.get('/orders', (req, res) => {
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

app.get('/orders/:id', (req, res) => {
  const { id } = req.params;

  res.json({
    id,
    orderDate: faker.faker.time.recent('abbr'),
    orderTotal: faker.faker.commerce.price(10, 5000, 0, '$'),
  });
});

app.listen(port, () => {
  console.log("I'm listening at port: ", port);
});
