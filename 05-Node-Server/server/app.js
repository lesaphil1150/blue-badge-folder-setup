let express = require("express");
let app = express();
const sequelize = require("./db");
let journal = require("./controllers/journalcontroller");
let user = require("./controllers/usercontroller");

sequelize.sync();

app.use(express.json());
app.use("/journal", journal);

app.use("/user", user);

app.listen(3000, function () {
  console.log("the app is running on port 3000");
});
