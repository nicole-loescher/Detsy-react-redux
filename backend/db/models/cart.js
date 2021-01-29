'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cart = sequelize.define('Cart', {
    user_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER
  }, {});
  Cart.associate = function(models) {
    // Cart.hasMany(models.Product, {foreignKey: 'product_id'})
  };
  return Cart;
};