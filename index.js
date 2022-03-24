const express = require('express');
const cors = require('cors');

const {
  logErrors,
  errorHandler,
  boomError,
} = require('./middlewares/error.handler');
const routerApi = require('./routes');

const app = express();
const port = process.env.PORT || 3000;

const whitelist = ['http://127.0.0.1:5500'];
const corsOptions = {
  origin: (origin, cb) => {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      cb(null, true);
    } else {
      cb(new Error('Not allowed by CORS'));
    }
  },
};

app.use(express.json());

app.use(cors(corsOptions));

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
