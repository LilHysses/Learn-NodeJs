const express = require('express');
const userServices = require('../services/servicesUser');
const router = express.Router();

router.get('/', async (req, res)=> {
  const user = await userServices.userLimitOffset(req, res)
  res.json(user);
});

module.exports = router;
