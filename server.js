const express = require('express');
const morgan = require('morgan');
const path = require("path");
const cors = require("cors")
const bodyParser = require('body-parser');
const customers = require('./router/customer');
const server = express();

//server
const port = process.env.PORT || 3000;


// morgan
server.use(morgan('dev'));

// body parser
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());
server.use('/customer', customers);

// error
server.use((req, res, next) => {
  const error = new Error('Tidak Ditemukan');
  error.status = 404;
  next(error);
});

// Fuction buat handling error
server.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});


// Server berjalan
server.listen(port, () => {
  console.log(`Server berjalan pada port ${port}`);
});
