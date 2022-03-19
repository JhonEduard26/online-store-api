const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello from my server on Express');
});

app.get('/products', (req, res) => {
  res.json([
    {
      name: 'laptop',
      price: 1250,
    },
    {
      name: 'Mouse',
      price: 100,
    },
  ]);
});

app.get('/products/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: 'Product 1',
    price: 50,
  });
});

app.get('/categories', (req, res) => {
  res.json([
    {
      name: 'toys',
    },
    {
      name: 'clothes',
    },
  ]);
});

app.get('/categories/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: 'Electronics',
  });
});

app.get('/users', (req, res) => {
  res.json([
    {
      name: 'Nicolas',
      email: 'myemail@mail.com',
      password: '1234',
    },
    {
      name: 'Bryan',
      email: 'myemail@mail.com',
      password: '1234',
    },
  ]);
});

app.get('/users/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: 'Jhon',
    email: 'mail@mail.com',
    password: '123456',
  });
});

app.get('/orders', (req, res) => {
  res.json([
    {
      date: '12-06-2022',
      total: 300,
    },
    {
      date: '15-06-2022',
      total: 1200,
    },
  ]);
});

app.get('/orders/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    date: '11-01-2022',
    total: 400,
  });
});

app.listen(port, () => {
  console.log("I'm listening at port: ", port);
});
