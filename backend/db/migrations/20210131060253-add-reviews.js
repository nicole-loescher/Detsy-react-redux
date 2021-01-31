'use strict';
const { User, Product } = require('../models')
const { Op } = require('sequelize')

module.exports = {
  up: async(queryInterface, Sequelize) => {

    const reviewArr = [
      'These dice are AMAZING!!',
      'Such great quality!',
      'I would give these a 11/10 if I could!',
      'All of my friends comment on how cool these are.',
      'These were good dice, just not my style.',
      'These have my nat 20 on point!'
    ];
    const ratingArr = [
      '7','8','9','10'
    ]

    function randomNum(max) {
      return Math.ceil(Math.random() * Math.floor(max));
    };

    const users = await User.count({ where: { id: { [Op.gt]: 0 } } });
    const products = await Product.count({ where: { id: { [Op.gt]: 0 } } });

    const reviews = [];

    for( let i = 0; i < 30; i++ ){
      const review = {
        user_id: randomNum(users),
        product_id: randomNum(products -1),
        comments: reviewArr[randomNum(6) - 1],
        rating: ratingArr[randomNum(4) - 1],
        createdAt: new Date(),
        updatedAt: new Date()
      }
      reviews.push(review)
    }
      return queryInterface.bulkInsert('Reviews', reviews, {});
    
  },

  down: (queryInterface, Sequelize) => {
   
      return queryInterface.bulkDelete('Reviews', null, {});
    
  }
};
