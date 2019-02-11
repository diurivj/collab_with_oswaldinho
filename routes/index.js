const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.send(`Que pedo putita`)
});

module.exports = router;
