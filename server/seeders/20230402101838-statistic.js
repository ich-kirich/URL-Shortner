'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('statistics', [{
      id: 1,
      date: new Date(),
      ip: '192.168.0.1',
      region: 'Unknown',
      browserName: 'Chrome',
      browserVersion: '1.0',
      os: 'Windows',
      LinkId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('statistics', null, {});
  }
};
