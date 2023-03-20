const Sequelize = require("sequelize");
const { DataTypes } = Sequelize;
module.exports = (sequelize, DataTyples) => {
  const categoria = sequelize.define("categoria", {
    idCategoria: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    titulo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cantidadDeJuegos: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
};
