const Provider = require('../models/providers');

const Product = (sequelize, DataTypes) => {

    return sequelize.define('Products',{
        name: DataTypes.STRING,
        description: DataTypes.STRING,
        idProvider: {
            type: DataTypes.INTEGER,
            references: {
              model: Provider, // name of Target model
              key: 'id', // key in Target model that we're referencing
            },
          },
    });
};

module.exports = Product;