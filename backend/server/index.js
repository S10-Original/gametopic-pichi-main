const express = require("express");
const cors = require("cors");
const sequelize = require("sequelize");
const { PORT } = require("../config/dbConfig");
const { db } = require("../db/connection.js");
const app = express();

/* async function dbConnection() {
  try {
    await db.authenticate();
    console.log("Database online");
  } catch (error) {
    throw new Error(error);
  }
} */

var corOptions = {
  origin: "https://localhost:8080",
};

//middleware

app.use(cors(corOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//testeo api

app.get("/", (req, res) => {
  res.json({
    message: "Hello from api",
  });
});

//server

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
