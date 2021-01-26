'use strict';

module.exports = {
  up: async(queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Products', [
      {
        name: 'Rose Quartz',
        description: 'Beautiful semi-precious rose quartz engraved d20 set.',
        price: 42.50,
        imgPath: 'https://detsy.s3.us-east-2.amazonaws.com/rosequartz.jpg',
        user_id: 1,
        category_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {

       return queryInterface.bulkDelete('Products', null, {});
    
  }
};
