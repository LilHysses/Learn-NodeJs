const express = require('express');
const userServices = require('../services/servicesUser');
const validatorHendler = require('../middleware/validator.hendler');
const { schemaUserCreate, updateSchemaUser, getUserSchema } = require('../schema/schemaUsers');
const router = express.Router();

router.get('/', async (req, res, next)=> {
  try {
    const getUsers = await userServices.getAllUsers(req, res);
    return res.send({getUsers});
  } catch (error) {
    next(error);
  }
});

router.get('/:id', validatorHendler(getUserSchema, 'params'), async (req, res, next) => {
  try {
    const { id } = req.params;
    const getUser = await userServices.findOne(id);
    return res.json(getUser);
  } catch (error) {
    next(error);
  }
});

router.post('/', validatorHendler(schemaUserCreate, 'body'), async (req, res, next) => {
  try {
      console.log('POST /products received');
      const body = req.body;
      const createUser = await userServices.createUser(body);
      return createUser;
  } catch (error) {
    next(error);
  }
})


router.patch('/:id', validatorHendler(getUserSchema, 'params'),
validatorHendler(updateSchemaUser, 'body'),
async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;

    const updateUser = await userServices.updateUser(id, body);
    return res.json(updateUser);

  } catch (error) {
    next(error);
  }
})


router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const userDelete = await userServices.deleteUser({id});
    return res.json(userDelete);
  } catch (error) {
    next(error);
  }
})




module.exports = router;
