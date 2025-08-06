const faker = require('faker');
const pool = require('../libs/mysql');

const getAllProducts = async (req, res) => {
  try {
    const query = "SELECT * FROM task";
    const [rows] = await pool.query(query);
    return res.json(rows); // 👈 Ahora sí, devuelves los datos como respuesta
  } catch (error) {
    console.error(error);
    return res.json({ message: 'Internal server error' });
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
