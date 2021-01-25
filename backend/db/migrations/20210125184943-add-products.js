'use strict';

module.exports = {
  up: async(queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Products', [
      {
        name: 'Rose Quartz',
        description: 'Beautiful semi-precious rose quartz engraved d20 set.',
        price: 42.50,
        imgPath: 'https://i.etsystatic.com/20303997/r/il/0690c7/2350104957/il_1588xN.2350104957_ebyb.jpg',
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
