const boom = require('@hapi/boom');

const {models} = require('../libs/sequelize');


const getCategory = async () => {
  try {
    const response = await models.Category.findAll();
    return response;
  } catch (error) {
    console.log(error);
  }
}

const getOneCategory = async (id) => {
  try {
    const categoryOne = await models.Category.findByPk(id, {
      include: ['product']
    });
    if (!categoryOne) {
      throw boom.notFound('Category not found');
    }
    return categoryOne;
  } catch (error) {
    console.log(error)
  }
}

const createCategory = async (body) => {
  try {
    const categoryCreate = await models.Category.create(body);
    return categoryCreate;
  } catch (error) {
    console.log(error);
  }
}

const updateCategory = async (id, body) =>{
  try {
    const categoryUpdate = await models.Category.findByPk(id);
    if (!categoryUpdate) return null;

    const updated = await categoryUpdate.update(body);
    return updated;
  } catch (error) {
    console.log(error);
  }
}

const deleteCategory = async (id) => {
  try {

    const categoryDelete = await models.Category.destroy({
      where: { id }
    });

    if (categoryDelete === 0) {
      return { message: 'Category not found' };
    }

    return {
      message: 'Category deleted',
      id
    };
  } catch (error) {
    console.log(error);
  }
}


module.exports = {
  getCategory,
  getOneCategory,
  createCategory,
  updateCategory,
  deleteCategory
}
