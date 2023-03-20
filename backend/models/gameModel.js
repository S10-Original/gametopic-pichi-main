module.exports = (sequelize, DataTypes) => {
  const game = sequelize.define("juegos", {
    idJuego: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    titulo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cantidadDePuntuaciones: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
  return game;
};
