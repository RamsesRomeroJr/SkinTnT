'use strict';
module.exports = (sequelize, DataTypes) => {
  const Spot = sequelize.define('Spot', {
    name: DataTypes.STRING,
    longitude: DataTypes.DECIMAL,
    latitude: DataTypes.DECIMAL,
    street: DataTypes.STRING,
    state: DataTypes.STRING,
    zipcode: DataTypes.INTEGER,
    url: DataTypes.STRING
  }, {});
  Spot.associate = function(models) {
    Spot.hasMany(models.Opening, {foreignKey:'spotId'})
    Spot.hasMany(models.Rating, {foreignKey:'spotId'})
  };
  return Spot;
};
