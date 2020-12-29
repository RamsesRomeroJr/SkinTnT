'use strict';
module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define('Booking', {
    userId: DataTypes.INTEGER,
    openingId: DataTypes.INTEGER,
    active: DataTypes.BOOLEAN,
    rating: DataTypes.INTEGER,
    review: DataTypes.STRING
  }, {});
  Booking.associate = function(models) {
    Booking.belongsTo(models.User, {foreignKey: 'userId'});
    Booking.belongsTo(models.Opening, {foreignKey: 'openingId'});

  };
  return Booking;
};
