'use strict';

module.exports = {
  
  up: async(queryInterface, Sequelize) => {

   return queryInterface.bulkInsert('Products', [
      {
        name: 'Rose Quartz',
        description: 'Beautiful semi-precious rose quartz engraved d20 set.',
        price: 42.50,
        imgPath: 'https://detsy.s3.us-east-2.amazonaws.com/product-images/rosequartz.jpg',
        user_id: 2,
        category_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Black Hollow',
        description: 'Black and gold hollow d20 set',
        price: 22.00,
        imgPath: 'https://detsy.s3.us-east-2.amazonaws.com/product-images/black-hollow.jpg',
        user_id: 2,
        category_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Blue and Gold',
        description: 'Gold and blue, with gears d20 set.',
        price: 21.00,
        imgPath: 'https://detsy.s3.us-east-2.amazonaws.com/product-images/blue-gold.jpg',
        user_id: 2,
        category_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Blue Agate',
        description: 'Beautiful semi-precious blue agate engraved d20 set.',
        price: 40.00,
        imgPath: 'https://detsy.s3.us-east-2.amazonaws.com/product-images/blueagate.jpg',
        user_id: 2,
        category_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Clock Work',
        description: 'Plastic d20 set with clock gears inside.',
        price: 12.50,
        imgPath: 'https://detsy.s3.us-east-2.amazonaws.com/product-images/clockwork.jpg',
        user_id: 2,
        category_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Dragon Scale',
        description: 'Dragon scales d20 set.',
        price: 22.50,
        imgPath: 'https://detsy.s3.us-east-2.amazonaws.com/product-images/dragonscale.jpg',
        user_id: 2,
        category_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Green and Gold',
        description: 'Rose gold metal with deep green d20 set.',
        price: 22.50,
        imgPath: 'https://detsy.s3.us-east-2.amazonaws.com/product-images/green-gold.jpg',
        user_id: 2,
        category_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Love-ly Dice',
        description: 'Beautiful rose gold metal with pink inlay d20 set.',
        price: 22.50,
        imgPath: 'https://detsy.s3.us-east-2.amazonaws.com/product-images/lovely.jpg',
        user_id: 2,
        category_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Lucky Duck',
        description: 'Clear plastic with tiny ducky inside d20 set.',
        price: 14.50,
        imgPath: 'https://detsy.s3.us-east-2.amazonaws.com/product-images/luckyduck.jpg',
        user_id: 2,
        category_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Nuclear',
        description: 'Nuclear explosion??',
        price: 13.00,
        imgPath: 'https://detsy.s3.us-east-2.amazonaws.com/product-images/nuclear.jpg',
        user_id: 2,
        category_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Obsidian',
        description: 'Black Obsidian engraved d20 set.',
        price: 42.50,
        imgPath: 'https://detsy.s3.us-east-2.amazonaws.com/product-images/obsidian.jpg',
        user_id: 2,
        category_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Purple and Bronze',
        description: 'Bronze and purple d20 set.',
        price: 22.50,
        imgPath: 'https://detsy.s3.us-east-2.amazonaws.com/product-images/purple-gold.jpg',
        user_id: 2,
        category_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Rainbow',
        description: 'Rainbow d20 set.',
        price: 11.50,
        imgPath: 'https://detsy.s3.us-east-2.amazonaws.com/product-images/rainbow.jpg',
        user_id: 2,
        category_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Skull',
        description: 'Clear with skull and moss d20 set.',
        price: 12.50,
        imgPath: 'https://detsy.s3.us-east-2.amazonaws.com/product-images/skull.jpg',
        user_id: 2,
        category_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ])
  },

  down: (queryInterface, Sequelize) => {

       return queryInterface.bulkDelete('Products', null, {});
    
  }
};
