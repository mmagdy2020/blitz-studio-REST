const express = require('express');
const router = express.Router();
const cors = require('cors');
/* GET home page. */
<<<<<<< Updated upstream
router.get('/', function(req, res, next) {
  console.log(req.session)
  res.render('index', { title: 'Express' });
=======
router.get('/', cors(), function(req, res, next) {
  res.status(200).json({ "title": "Hello react! this is from the REST project index route. CORS enabled" });
>>>>>>> Stashed changes
});

module.exports = router;
