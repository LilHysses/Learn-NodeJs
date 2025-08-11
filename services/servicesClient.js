const boom = require('@hapi/boom');

const {models} = require('../libs/sequelize');


const getClient = async() => {
  const respose = await models.Client.findAll({
    include: ['user']
  });
  return respose;
}

const findOneClient = async (id) => {
  try {
    const client = await models.Client.findByPk(id);
    if (!client) {
      throw boom.notFound('client not found');
    }
    return client;
  } catch (error) {
    console.log(error);
  }
}

const createClient = async (body) => {
  try {
    console.log(body);
    const newUser = await models.User.create(body.user)
    const newClient = await models.Client.create({
      ...body,
      userId: newUser.id
    });
    return {
      user: newClient,
      message: 'Client created successfully'
    }
  } catch (error) {
    console.log(error);
  }
}

const updateClient = async (id, body) => {
  try {
    console.log(id);
    const updClient = await models.Client.findByPk(id);
    if(!updClient){
      return {
        error: 'Client not found'
      }
    }
    const response = await updClient.update(body);
    return response;
  } catch (error) {
    console.log(error);
  }
}

const deleteClient = async (id) => {
  try {
    const clientDelete = await models.Client.findByPk(id);
    await clientDelete.destroy();
    return {
      message: 'Client deleted successfully',
      id
    }
  } catch (error) {
    console.log(error);
  }
}


module.exports = {
  getClient,
  findOneClient,
  createClient,
  updateClient,
  deleteClient
}
