'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    price: DataTypes.NUMERIC,
    user_id: DataTypes.INTEGER,
    category_id: DataTypes.INTEGER
  }, {});
  Product.associate = function(models) {
    // associations can be defined here
  };
  return Product;
};