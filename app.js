require('dotenv').config();
const express = require('express');
const app = express();
const morgan = require('morgan');
const router = require('./routes');
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use(router);

// 500
app.use((err, req, res, next) => {
  console.log(err);
  return res.status(500).json({
    status: false,
    message: err.message,
    data: null,
  });
});

app.listen(4000, () => console.log('running on port', 4000));
