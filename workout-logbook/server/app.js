//WORKOUT LOG
require("dotenv").config();
let express = require("express");
let app = express();
let sequelize = require("./db");
let user = require("./controllers/user-controller");
let log = require("./controllers/log-controller");

sequelize.sync();
app.use(express.json());

app.use("/user", user);
app.use("/log", log);

app.listen(3000, function () {
  console.log("The app is running on port 3000");
});
