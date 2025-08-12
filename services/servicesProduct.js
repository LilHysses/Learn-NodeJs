const { models } = require('../libs/sequelize');

const getAllProducts = async () => {
  try {
    const data = await models.Product.findAll({
      include: ['category']
    });
    return data;
  } catch (error) {
    console.error(error);
    throw new Error('Internal server error');
  }
};

const createNewProduct = async (body) => {
  try {
    const newProduct = await models.Product.create(body);
    return newProduct;
  } catch (error) {
    console.error(error);
    throw new Error('Error creating product');
  }
};

const updProductById = async (id, body) => {
  try {
    const product = await models.Product.findByPk(id);
    if (!product) return null;

    const updated = await product.update(body);
    return updated;
  } catch (error) {
    console.error(error);
    throw new Error('Error updating product');
  }
};

const deleteProduct = async (id) => {
  try {
    console.log(id);
    const product = await models.Product.findByPk(id);
    if (!product) return null;

    await product.destroy();
    return {
      message: 'Product deleted',
      id
    };
  } catch (error) {
    console.error(error);
    throw new Error('Error deleting product');
  }
};

const getOneProduct = async (id) => {
  try {
    const product = await models.Product.findByPk(id);
    return product || null;
  } catch (error) {
    console.error(error);
    throw new Error('Error fetching product');
  }
};

module.exports = {
  getAllProducts,
  createNewProduct,
  updProductById,
  deleteProduct,
  getOneProduct,
};
