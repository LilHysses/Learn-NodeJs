const express = require('express');
const productServices = require('../services/servicesProduct');
const router = express.Router();

router.get('/', async (req, res)=> {
  const user = await productServices.userLimitOffset(req, res)
  res.json(user);
});

module.exports = router;
