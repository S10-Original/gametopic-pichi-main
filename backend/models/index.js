const dbConfig = require("../config/dbConfig");

const Sequelize = require("sequelize");
const { DataTypes, Op } = Sequelize;

const resumenModel = require("./resumenModel");
const gameModel = require("./gameModel.js");

const dbConnection = new Sequelize(
  dbConfig.DATABASE,
  dbConfig.USER,
  dbConfig.PASSWORD,
  {
    host: "localhost",
    dialect: dbConfig.dialect,
    operatorsAliases: false,
    pool: {
      max: dbConfig.pool.max,
      min: dbConfig.pool.min,
      acquire: dbConfig.pool.acquire,
      idle: dbConfig.pool.idle,
    },
  }
);

async function dbConnected() {
  try {
    await dbConnection.authenticate();
    console.log("Database online");
  } catch (error) {
    throw new Error(error);
  }
}

const db = {};

db.Sequelize = Sequelize;
db.dbConnection = dbConnection;

db.games = require("./gameModel.js")(db.dbConnection, DataTypes);
db.resumen = require("./resumenModel.js")(db.dbConnection, DataTypes);

const { HasOne, BelongsTo } = require("sequelize");
/* db.usuario = require("./userModel.js")(dbConnection, DataTypes);
db.categoria = require("./categoryModel.js")(dbConnection, DataTypes);
db.gameMedia = require("./gameMediaModel.js")(dbConnection, DataTypes);
 */

/* games.HasOne(db.resumen, {
  foreignKey: "idJuego",
});
db.resumen.BelongsTo(db.games);
 */
dbConnection.sync({ force: false }).then(() => {
  console.log("Database re-sync");
});

module.exports = db;
