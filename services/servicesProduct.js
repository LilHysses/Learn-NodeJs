const faker = require('faker');
const getAllProducts = (req, res) => {
  try {
    const products = [];
    const size = parseInt(req.query.size) || 5;
    for(let index = 0; index < size; index++){
      products.push({
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.imageUrl(),
      });
    }
    return products;
  } catch (error) {
    console.log(error);
  }
};

const createNewProduct = (req, res) => {
  try {
    const body = req.body;
    console.log(body);
    res.json({
      ok: true,
      data: body
    });
  } catch (error) {
    console.log(error);
  }
};

const updProductById = (req, res) => {
  try {
    const {id} = req.params;
    const body = req.body;
    res.json({
      message: 'Update Success',
      product: body,
      id,
    });
  } catch (error) {
    console.log(error);
  }
};

const deleteProduct = (req, res) => {
  try {
    const { id } = req.params;
    const response = {
      message: 'Product deleted',
      id,
    };
    console.log('📦 Enviando respuesta DELETE:', response);
    res.status(200).json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error deleting product' });
  }
};

const getOneProduct = (req, res) => {
  try {
    const { id } = req.params;
    res.json({
      'id': id,
      'name': 'Teclado Gamer',
      'price': 120000,
      'category': 'Tecnology'
    });
  } catch (error) {
    console.log(error)
  }
};


module.exports = {
  getAllProducts,
  createNewProduct,
  updProductById,
  deleteProduct,
  getOneProduct,
}
