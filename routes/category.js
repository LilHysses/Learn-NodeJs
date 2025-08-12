const express = require('express');
const router = express.Router();
const servicesCategory = require('../services/servicesCategory');
const { createCategory, updateCategory, getCategory } = require('../schema/schemaCategory');
const validatorHendler = require('../middleware/validator.hendler');


router.get('/', async (req, res, next) => {
  try {
    const getCategory = await servicesCategory.getCategory(req, res);
    return res.send({ getCategory });
  } catch (error) {
    next(error);
  }
});

router.get('/:id', validatorHendler(getCategory, 'params'), async (req, res, next) => {
  try {
    const { id } = req.params;
    const getOneCategory = await servicesCategory.getOneCategory(id);
    res.json(getOneCategory);
  } catch (error) {
    next(error);
  }
});

router.post('/', validatorHendler(createCategory, 'body'), async (req, res, next) => {
  try {
    const body = req.body;
    const newCategory = await servicesCategory.createCategory(body);
    res.json(newCategory);
  } catch (error) {
    next(error);
  }
})


router.patch('/:id',
  validatorHendler(getCategory, 'params'),
  validatorHendler(updateCategory, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;

      const updatedCategory = await servicesCategory.updateCategory(id, body);
      res.json({
        message: 'Category updated',
        category: updatedCategory
      });
    } catch (error) {
      next(error);
    }
  }
);


router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const categoryDelete = await servicesCategory.deleteCategory(id);
    return res.json(categoryDelete);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
