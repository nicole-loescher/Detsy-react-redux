'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   return queryInterface.bulkInsert('Categories', [
     {
       type: 'stone',
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
       type: 'plastic',
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
       type: 'metal',
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
       type: 'hollow',
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
       type: 'bone',
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
       type: 'wood',
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
       type: 'glass',
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
       type: 'other',
       createdAt: new Date(),
       updatedAt: new Date()
     },
   ])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
