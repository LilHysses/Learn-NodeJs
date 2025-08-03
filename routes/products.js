const express = require('express');
const productServices = require('../services/servicesProduct')
const router = express.Router();
const validatorHendler = require('../middleware/validator.hendler');
const {schemaProductCreate, updateSchemaProduct, getProductSchema} = require('../schema/schemaProducts');


//OBTENER TODOS LOS PRODUCTOS
router.get('/', async (req, res, next)=> {
  try {
    const products = await productServices.getAllProducts(req, res);
    res.json(products);
  } catch (error) {
    next(error);
  }
});

//ENVIAR O GUARDAR UN PRODUCTO
router.post('/', validatorHendler(schemaProductCreate, 'body'), async (req, res)=> {
  console.log('POST /products received');
  const createProduct = await productServices.createNewProduct(req, res);
  return createProduct;
});

//ACTUALIZAR UN PRODUCTO POR ID
router.patch('/:id',
validatorHendler(getProductSchema, 'params'),
validatorHendler(updateSchemaProduct, 'body'),
async (req, res, next) => {
  await productServices.updProductById(req, res);
});

//BORRAR UN PRODUCTO POR ID
router.delete('/:id', async (req, res)=> {
  const deleteProduct = await productServices.deleteProduct(req, res);
  return deleteProduct;
})

//OBETENER UN PRODCUTO
router.get('/:id', validatorHendler(getProductSchema, 'params'), async (req, res)=> {
  const oneProduct = await productServices.getOneProduct(req, res);
  return oneProduct;
});

module.exports = router;
