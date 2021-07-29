let router = require("express").Router();
//localhost:3000/calculator/add

router.post("/add", function (req, res) {
  let number1 = req.body.num1;
  let number2 = req.body.num2;

  let total = Number(number1 + number2);

  res.json({ total: total });
});

router.post("/subtract", function (req, res) {
  let subtract1 = req.body.sub01;
  let subtract2 = req.body.sub02;

  let subtotal = subtract1 - subtract2;

  res.json({ total: subtotal });
});

module.exports = router;
