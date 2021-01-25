'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    user_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    comments: DataTypes.TEXT,
    rating: DataTypes.FLOAT,
  }, {});
  Review.associate = function(models) {
    Review.belongsTo(models.User, { foreignKey: 'user_id' })
    Review.belongsTo(models.Product, { foreignKey: 'product_id' })
  };
  return Review;
};