const express = require('express');
const productServices = require('../services/servicesProduct')
const router = express.Router();
const {schemaProductCreate, updateSchemaProduct, getProductSchema} = require('../schema/schemaProducts');
const validatorHendler = require('../middleware/validator.hendler');


//OBTENER TODOS LOS PRODUCTOS
router.get('/', async (req, res, next)=> {
  try {
    const products = await productServices.getAllProducts(req, res);
    res.send({products});
  } catch (error) {
    next(error);
  }
});

//ENVIAR O GUARDAR UN PRODUCTO
router.post('/', validatorHendler(schemaProductCreate, 'body'), async (req, res, next)=> {
  try {
    const body = req.body;
    const createProduct = await productServices.createNewProduct(body);
    res.send({createProduct});
  } catch (error) {
    next(error);
  }
});

//ACTUALIZAR UN PRODUCTO POR ID
router.patch('/:id',
validatorHendler(getProductSchema, 'params'),
validatorHendler(updateSchemaProduct, 'body'),
async (req, res, next) => {
  try {
      const { id } = req.params;
      const body = req.body;

      const updateProduct = await productServices.updProductById(id, body);
      res.send(updateProduct);
  } catch (error) {
    next(error);
  }
});

//BORRAR UN PRODUCTO POR ID
router.delete('/:id', async (req, res, next)=> {
  try {
    const id = req.params.id;
    const deleteProduct = await productServices.deleteProduct(id);
    return res.send({
      message: 'Product deleted',
      deleteProduct,
      id
    });
  } catch (error) {
    next(error);
  }
})

//OBETENER UN PRODCUTO
router.get('/:id', validatorHendler(getProductSchema, 'params'), async (req, res, next)=> {
  try {
    const id = req.params;
    const oneProduct = await productServices.getOneProduct(id);
    return res.send(oneProduct);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
