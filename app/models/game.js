module.exports = (sequelize, DataTypes) => {
  const Game = sequelize.define('Game', {
    translatedDescription: DataTypes.TEXT,
    igdbId: DataTypes.INTEGER,
  });

  Game.associate = (models) => {
    Game.hasMany(models.Favorite);
  };

  return Game;
};
