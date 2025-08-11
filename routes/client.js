const express = require('express');
const serviceClient = require('../services/servicesClient');
const router = express.Router();
const {getClientSchema, createClientSchema, updateClientSchema} = require('../schema/schemaClient');
const validatorHendler = require('../middleware/validator.hendler');


router.get('/', async (req, res, next) => {
  try {
    const getClients = await serviceClient.getClient(req, res);
    return res.send({getClients});
  } catch (error) {
    next(error);
  }
});


router.get('/:id', validatorHendler(getClientSchema, 'params'), async (req, res, next) => {
  try {
    const id = req.params;
    const client = await serviceClient.findOneClient(id);
    res.json(client);
  } catch (error) {
    next(error);
  }
})


router.post('/', validatorHendler(createClientSchema, 'body'), async (req, res, next) => {
  try {
    const body = req.body;
    const newCLient = await serviceClient.createClient(body);
    return newCLient;
  } catch (error) {
    next(error);
  }
})


router.patch('/:id', validatorHendler(updateClientSchema, 'params'), async (req, res, next) => {
  try {
    const id = req.params;
    const body = req.body;
    const updateClient = serviceClient.updateClient(id, body);
    return res.json(updateClient);
  } catch (error) {
    next(error);
  }
})


module.exports = router;
