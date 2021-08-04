// WORKOUT LOG BOOK

const Sequelize = require("sequelize");

const sequelize = new Sequelize("workout-logbook", "postgres", "password", {
  host: "localhost",
  dialect: "postgres",
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully");
  })
  .catch((err) => {
    console.error("unable to connect to database:", err);
  });

module.exports = sequelize;
