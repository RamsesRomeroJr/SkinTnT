'use strict';
module.exports = (sequelize, DataTypes) => {
  const Rating = sequelize.define('Rating', {
    spotId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    rating: DataTypes.INTEGER,
    review: DataTypes.STRING
  }, {});
  Rating.associate = function(models) {
    Rating.belongsTo(models.Spot, {foreignKey: 'spotId'});
    Rating.belongsTo(models.User, {foreignKey: 'userId'});
  };
  return Rating;
};
