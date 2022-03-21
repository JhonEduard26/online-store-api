const express = require('express');
const {
  logErrors,
  errorHandler,
  boomError,
} = require('./middlewares/error.handler');
const routerApi = require('./routes');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello from my server on Express');
});

routerApi(app);

app.use(logErrors);
app.use(boomError);
app.use(errorHandler);

app.listen(port, () => {
  console.log("I'm listening at port: ", port);
});
