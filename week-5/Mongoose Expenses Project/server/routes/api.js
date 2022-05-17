const express = require("express");
const router = express.Router();
const moment = require("moment");
const expensesFile = require("../../expenses");

const Expense = require("../model/Expense");

/*
expensesFile.forEach(element => {

new Expense({
    item: element.item,
    amount: element.amount,
    date: element.date,
    group: element.group
}).save()
    
});
*/
router.get("/expenses", function (req, res) {
  const d1 = req.query.d1;
  const d2 = req.query.d2;

  if (d1 != undefined && d2 != undefined) {
    Expense.find({
      date: { $lt: moment(d2).format("LLLL"), $gt: moment(d1).format("LLLL") },
    })
      .sort({ date: -1 })
      .exec(function (err, expenses) {
        res.send(expenses);
      });
  } else if (d1 != undefined) {
    Expense.find({
      date: { $gt: moment(d1).format("LLLL"), $lt: moment().format("LLLL") },
    })
      .sort({ date: -1 })
      .exec(function (err, expenses) {
        res.send(expenses);
      });
  } else {
    Expense.find({})
      .sort({ date: -1 })
      .exec(function (err, expenses) {
        res.send(expenses);
      });
  }
});

router.post("/expense", function (req, res) {
  const data = req.body;
  const newExpense = new Expense({
    item: data.item,
    amount: data.amount,
    date: data.date
      ? moment(data.date).format("LLLL")
      : moment().format("LLLL"),
    group: data.group,
  });

  newExpense.save().then((p) => {
    console.log(p.amount);
  });

  res.send("saved new expense");
});

router.put("/update/:group1&:group2", function (req, res) {
  const group1 = req.params.group1;
  const group2 = req.params.group2;

  const filter = { group: group1 };
  const update = { group: group2 };
  const opts = { new: true };

  const toUpdate = Expense.findOneAndUpdate(
    filter,
    update,
    opts,
    function (err, expense) {
      console.log(expense);
      res.send(
        `expense name: ${expense.item} and the new group is: ${expense.group}`
      );
    }
  );
});

router.get("/expenses/:group", function (req, res) {
  const groupCategory = req.params.group;
  const total = req.query.total;
  if (!total) {
    Expense.find({ group: groupCategory }, function (err, expenses) {
      res.send(expenses);
    });
  } else {
    Expense.aggregate(
      [
        { $match: { group: groupCategory } },
        { $group: { _id: null, amount: { $sum: "$amount" } } },
      ],
      function (err, expenses) {
        res.send(expenses);
      }
    );
  }
});

module.exports = router;
