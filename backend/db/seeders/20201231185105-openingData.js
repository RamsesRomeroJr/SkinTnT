'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Openings', [
        {spotId: 1,
         userId:null,
         start: new Date("2021-01-01T12:00:00"),
         end: new Date("2021-01-01T13:00:00"),
         createdAt: new Date(),
         updatedAt: new Date()
        },
        {spotId: 1,
         userId:null,
         start: new Date("2021-01-01T13:00:00"),
         end: new Date("2021-01-01T14:00:00"),
         createdAt: new Date(),
         updatedAt: new Date()
        },
        {spotId: 1,
         userId:null,
         start: new Date("2021-01-01T14:00:00"),
         end: new Date("2021-01-01T15:00:00"),
         createdAt: new Date(),
         updatedAt: new Date()
        },
        {spotId: 1,
         userId:null,
         start: new Date("2021-01-01T15:00:00"),
         end: new Date("2021-01-01T16:00:00"),
         createdAt: new Date(),
         updatedAt: new Date()
        },
        {spotId: 1,
         userId:null,
         start: new Date("2021-01-01T16:00:00"),
         end: new Date("2021-01-01T17:00:00"),
         createdAt: new Date(),
         updatedAt: new Date()
        },
        {spotId: 2,
         userId:null,
         start: new Date("2021-01-01T12:00:00"),
         end: new Date("2021-01-01T13:00:00"),
         createdAt: new Date(),
         updatedAt: new Date()
        },
        {spotId: 2,
         userId:null,
         start: new Date("2021-01-01T13:00:00"),
         end: new Date("2021-01-01T14:00:00"),
         createdAt: new Date(),
         updatedAt: new Date()
        },
        {spotId: 2,
         userId:null,
         start: new Date("2021-01-01T14:00:00"),
         end: new Date("2021-01-01T15:00:00"),
         createdAt: new Date(),
         updatedAt: new Date()
        },
        {spotId: 2,
         userId:null,
         start: new Date("2021-01-01T15:00:00"),
         end: new Date("2021-01-01T16:00:00"),
         createdAt: new Date(),
         updatedAt: new Date()
        },
        {spotId: 2,
         userId:null,
         start: new Date("2021-01-01T16:00:00"),
         end: new Date("2021-01-01T17:00:00"),
         createdAt: new Date(),
         updatedAt: new Date()
        },
        {spotId: 3,
          userId:null,
          start: new Date("2021-01-01T12:00:00"),
          end: new Date("2021-01-01T13:00:00"),
          createdAt: new Date(),
          updatedAt: new Date()
         },
         {spotId: 3,
          userId:null,
          start: new Date("2021-01-01T13:00:00"),
          end: new Date("2021-01-01T14:00:00"),
          createdAt: new Date(),
          updatedAt: new Date()
         },
         {spotId: 3,
          userId:null,
          start: new Date("2021-01-01T14:00:00"),
          end: new Date("2021-01-01T15:00:00"),
          createdAt: new Date(),
          updatedAt: new Date()
         },
         {spotId: 3,
          userId:null,
          start: new Date("2021-01-01T15:00:00"),
          end: new Date("2021-01-01T16:00:00"),
          createdAt: new Date(),
          updatedAt: new Date()
         },
         {spotId: 3,
          userId:null,
          start: new Date("2021-01-01T16:00:00"),
          end: new Date("2021-01-01T17:00:00"),
          createdAt: new Date(),
          updatedAt: new Date()
         },
         {spotId: 4,
          userId:null,
          start: new Date("2021-01-01T12:00:00"),
          end: new Date("2021-01-01T13:00:00"),
          createdAt: new Date(),
          updatedAt: new Date()
         },
         {spotId: 4,
          userId:null,
          start: new Date("2021-01-01T13:00:00"),
          end: new Date("2021-01-01T14:00:00"),
          createdAt: new Date(),
          updatedAt: new Date()
         },
         {spotId: 4,
          userId:null,
          start: new Date("2021-01-01T14:00:00"),
          end: new Date("2021-01-01T15:00:00"),
          createdAt: new Date(),
          updatedAt: new Date()
         },
         {spotId: 4,
          userId:null,
          start: new Date("2021-01-01T15:00:00"),
          end: new Date("2021-01-01T16:00:00"),
          createdAt: new Date(),
          updatedAt: new Date()
         },
         {spotId: 4,
          userId:null,
          start: new Date("2021-01-01T16:00:00"),
          end: new Date("2021-01-01T17:00:00"),
          createdAt: new Date(),
          updatedAt: new Date()
         },
         {spotId: 5,
          userId:null,
          start: new Date("2021-01-01T12:00:00"),
          end: new Date("2021-01-01T13:00:00"),
          createdAt: new Date(),
          updatedAt: new Date()
         },
         {spotId: 5,
          userId:null,
          start: new Date("2021-01-01T13:00:00"),
          end: new Date("2021-01-01T14:00:00"),
          createdAt: new Date(),
          updatedAt: new Date()
         },
         {spotId: 5,
          userId:null,
          start: new Date("2021-01-01T14:00:00"),
          end: new Date("2021-01-01T15:00:00"),
          createdAt: new Date(),
          updatedAt: new Date()
         },
         {spotId: 5,
          userId:null,
          start: new Date("2021-01-01T15:00:00"),
          end: new Date("2021-01-01T16:00:00"),
          createdAt: new Date(),
          updatedAt: new Date()
         },
         {spotId: 5,
          userId:null,
          start: new Date("2021-01-01T16:00:00"),
          end: new Date("2021-01-01T17:00:00"),
          createdAt: new Date(),
          updatedAt: new Date()
         },
      ], {});

  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Openings', null, {});

  }
};
