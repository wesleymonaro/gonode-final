module.exports = (sequelize, _DataTypes) => {
  const Favorite = sequelize.define('Favorite', {

  });

  Favorite.associate = (models) => {
    Favorite.belongsTo(models.User);
    Favorite.hasMany(models.Game);
  };

  return Favorite;
};
