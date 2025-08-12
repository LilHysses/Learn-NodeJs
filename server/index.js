const productRouter = require('../routes/products');
const userRouter = require('../routes/user');
const clientRouter = require('../routes/client');
const express = require('express');

function apiRouter (app) {
  const router = express.Router(); //Usar para crear rutas y lo tome como principal
  app.use('/api/v1', router); //Ruta principal

  //Lo que le sigue a la ruta principal
  router.use('/products', productRouter);
  router.use('/user', userRouter);
  router.use('/clients', clientRouter);
}

//Exportamos la funcion
module.exports = apiRouter;
