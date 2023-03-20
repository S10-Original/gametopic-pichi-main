module.exports = {
  PORT: 8080,
  USER: "root",
  PASSWORD: "",
  DATABASE: "database_development",
  dialect: "mariadb",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
