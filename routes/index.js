var express = require('express');
var router = express.Router();
var GDB = require("goblindb");

var goblinDB = GDB();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(goblinDB.get())
  res.render('index', { title: 'Green' });
});

module.exports = router;
