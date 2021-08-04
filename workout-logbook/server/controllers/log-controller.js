// LOG CONTROLLER - This is where your endpoints will go

let express = require("express");
let router = express.Router();
let validateSession = require("../middleware/validate-session");
const log = require("../db").import("../models/log");

//create a workout log
router.post("/", validateSession, (req, res) => {
  const logEntry = {
    description: req.body.log.description,
    definition: req.body.log.definition,
    result: req.body.log.result,
    owner_id: req.user.id,
  };

  log
    .create(logEntry)
    .then((log) => res.status(200).json(log))
    .catch((err) => res.status(500).json({ error: err }));
});
//get by user logged in
router.get("/", validateSession, function (req, res) {
  console.log(req.user.id);
  log
    .findAll({ where: { owner_id: req.user.id } })
    .then((logs) => res.status(200).json(logs))
    .catch((err) => res.status(500).json({ error: err }));
});

//get by ID
// router.get("/:owner_id", function (req, res) {
//   log
//     .findAll({ where: { owner_id: req.params.owner_id } })
//     .then((logs) => res.status(200).json(logs))
//     .catch((err) => res.status(500).json({ error: err }));
// });

router.get("/:id", function (req, res) {
  log
    .findAll({ where: { id: req.params.id } })
    .then((logs) => res.status(200).json(logs))
    .catch((err) => res.status(500).json({ error: err }));
});

//update
router.put("/:id", validateSession, function (req, res) {
  const updateLogEntry = {
    description: req.body.log.description,
    definition: req.body.log.definition,
    result: req.body.log.result,
  };

  const query = { where: { id: req.params.id, owner_id: req.user.id } };

  log
    .update(updateLogEntry, query)
    .then((logs) => res.status(200).json(logs))
    .catch((err) => res.status(500).json({ error: err }));
});

//delete
router.delete("/:id", validateSession, function (req, res) {
  const query = { where: { id: req.params.id, owner_id: req.user.id } };

  log
    .destroy(query)
    .then(() => res.status(200).json({ message: "log was  removed" }))
    .catch((err) => res.status(500).json({ error: err }));
});

module.exports = router;
