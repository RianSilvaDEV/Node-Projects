const Provider = (sequelize, DataTypes) => {

    return sequelize.define('Providers',{
        name: DataTypes.STRING,
    });
};

module.exports = Provider;