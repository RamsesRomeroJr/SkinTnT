'use strict';
module.exports = (sequelize, DataTypes) => {
  const Spot = sequelize.define('Spot', {
    name: DataTypes.STRING,
    longitude: DataTypes.DECIMAL,
    latitude: DataTypes.DECIMAL,
    street: DataTypes.STRING,
    state: DataTypes.STRING,
    zipcode: DataTypes.INTEGER
  }, {});
  Spot.associate = function(models) {
    // associations can be defined here
  };
  return Spot;
};