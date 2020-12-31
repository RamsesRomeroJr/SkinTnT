'use strict';
module.exports = (sequelize, DataTypes) => {
  const Opening = sequelize.define('Opening', {
    spotId: DataTypes.INTEGER,
    start: DataTypes.DATE,
    end: DataTypes.DATE
  }, {});
  Opening.associate = function(models) {
    Opening.belongsTo(models.Spot, {foreignKey: 'spotId'});
    Opening.belongsTo(models.User, {foreignKey: 'userId'});
  };
  return Opening;
};
