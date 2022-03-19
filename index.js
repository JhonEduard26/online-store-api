const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello from my server on Express');
});

app.listen(port, () => {
  console.log("I'm listening at port: ", port);
});
