const sequelize = require("sequelize");
const { DataTypes } = sequelize;
module.exports = (sequelize, DataTypes) => {
  const resumen = sequelize.define("resumen", {
    idResumen: {
      type: sequelize.DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    idJuego: {
      type: sequelize.DataTypes.STRING,
      allowNull: false,
    },
    cantidadDePuntuaciones: {
      type: sequelize.DataTypes.INTEGER,
      allowNull: false,
    },
  });
  return resumen;
};
