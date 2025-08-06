const pool = require('../libs/mysql');
const {boom} = require('@hapi/boom');
const {models} = require('../libs/sequelize');

const getAllUsers = async () => {
  const response = await models.User.findAll()
  return response;
}

const findOne = async (id) => {
  try {
    const users = await models.User.findByPk(id);
    if (!users) {
      throw boom.notFound('User not found');
    }
    return users;
  } catch (error) {
    console.log(error)
  }
}

const createUser = async (body) => {
  try {
    const newUser = await models.User.create(body);
    return {
      user: newUser,
      message: 'User Create!'
    }
  } catch (error) {
    console.log(error);
  }
}

const updateUser = async (id, body)=> {
  try {
    const User = await models.User.findByPk(id);
    if (!User){
      return {
        message: 'User not found!'
      }
    }
    const response = await User.update(body);
    return response;

  } catch (error) {
    console.log(error);
  }
}

const deleteUser = async (id) => {
  try {
    const user = await models.User.findOne(id);
    await user.destroy();
    return {
      message: 'User deleted!',
      id
    }
  } catch (error) {
    console.log(error);
  }
}



module.exports = {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
  findOne
}
