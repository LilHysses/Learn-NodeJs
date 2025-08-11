const {Model, DataTypes, Sequelize} = require('sequelize');

const {USER_TABLE} = require('./user.model');

const CLIENT_TABLE = 'clients';

const ClientSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING(100)
  },
  lastName: {
    allowNull: false,
    type: DataTypes.STRING(100),
    field: 'last_name'
  },
  phone: {
    allowNull: true,
    type: DataTypes.STRING(20)
  },
  createAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW
  },
  userId: {
      field: 'user_id',
      allowNull: true,
      type: DataTypes.INTEGER,
      unique: true,
    references: {
      model: USER_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  }
}




class Client extends Model {
  static associate(models){
    this.belongsTo(models.User, {as: 'user'})
  }

  static config(sequelize){
    return{
      sequelize,
      tableName: CLIENT_TABLE,
      modelName: 'Client',
      timestamps: false
    }
  }
}


module.exports = {Client, ClientSchema, CLIENT_TABLE};
