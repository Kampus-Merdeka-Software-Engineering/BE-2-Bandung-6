const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const server = express();
const layananRouter = require('./router/layanan');
const kotaRouter = require('./router/kota');
const datapenumpangRouter = require('./router/data_penumpang');

//server
const PORT = process.env.PORT || 3001;

server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));


// morgan
server.use(morgan('dev'));
//Router
server.use('/layanan', layananRouter);
server.use('/kota', kotaRouter);
server.use('/datapenumpang', datapenumpangRouter);

// server.use('/customer', customers);

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
server.listen(PORT, () => {
  console.log(`Server berjalan pada port ${PORT}`);
});
