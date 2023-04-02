'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('links', [{
      id: 1,
      originalUrl: 'https://www.google.ru/',
      shortUrl: 'https://www.google.ru/1',
      shortCode: '1',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('links', null, {});
  }
};
