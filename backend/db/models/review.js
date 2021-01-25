'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    user_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    comments: DataTypes.TEXT,
    rating: DataTypes.INTEGER
  }, {});
  Review.associate = function(models) {
    // associations can be defined here
  };
  return Review;
};