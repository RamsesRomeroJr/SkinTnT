'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Spots', [
        {name: 'Ironclad Tattoo Co.',
        longitude: -83.12903895732221,
        latitude: 42.57549459076494,
        street: '3871 Rochester Road',
        city: 'Troy',
        state: 'Michigan',
        zipcode: 48083,
        createdAt: new Date(),
        updatedAt: new Date()
      },
        {name: 'Tit 4 Tat Tattoo Studio Inc.',
        longitude: -83.05327061574549,
        latitude: 42.62940002292146,
        street: '45571 Mound Road',
        city: 'Shelby Charter Twp',
        state: 'Michigan',
        zipcode: 48317,
        createdAt: new Date(),
        updatedAt: new Date()
      },
        {name: 'Big Top Tattoo',
        longitude: -83.0320376869099,
        latitude: 42.629720665877166,
        street: '45446 Van Dyke Ave',
        city: 'Utica',
        state: 'Michigan',
        zipcode: 48317,
        createdAt: new Date(),
        updatedAt: new Date()
      },
        {name: 'Elite Ink Tattoo Studios',
        longitude: -83.27372484987825,
        latitude: 42.361813397767015,
        street: '8602 N Telegraph Road',
        city: 'Dearborn Heights',
        state: 'Michigan',
        zipcode: 48127,
        createdAt: new Date(),
        updatedAt: new Date()
      },
        {name: "B'z Ink Tattoo and Piercing Shop",
        longitude: -83.13089447712532,
        latitude: 42.61420184955693,
        street: '6453 Rochester Road',
        city: 'Troy',
        state: 'Michigan',
        zipcode: 48085,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Spots', null, {});

  }
};
