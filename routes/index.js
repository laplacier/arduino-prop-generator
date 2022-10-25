var express = require('express');
var router = express.Router();
const controller = require('../controllers/controller.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* GET board page. (Step 1) */
router.get('/board', controller.board);

/* GET input page. (Step 2) */
router.get('/input', (req, res, next) => {
  // if no board is selected, return back to board select
  if (req.params.board === null) res.render('/board')
  // otherwise continue
  else next()
}, (req, res, next) => {
  // choose inputs for board
  res.render('input')
})

module.exports = router;
