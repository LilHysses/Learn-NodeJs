const express = require('express');
const productServices = require('../services/servicesProduct')
const router = express.Router();

//OBTENER TODOS LOS PRODUCTOS
router.get('/', async (req, res)=> {
  const products = await productServices.getAllProducts(req, res);
  res.json(products);
});

//ENVIAR O GUARDAR UN PRODUCTO
router.post('/', async (req, res)=> {
  const createProduct = await productServices.createNewProduct(req, res);
  return createProduct;
});

//ACTUALIZAR UN PRODUCTO POR ID
router.patch('/:id', async (req, res)=> {
  const updateProduct = await productServices.updProductById(req, res);
  return updateProduct;
});

//BORRAR UN PRODUCTO POR ID
router.delete('/:id', async (req, res)=> {
  const deleteProduct = await productServices.deleteProduct(req, res);
  return deleteProduct;
})

//OBETENER UN PRODCUTO
router.get('/:id', async (req, res)=> {
  const oneProduct = await productServices.getOneProduct(req, res);
  return oneProduct;
});

module.exports = router;
