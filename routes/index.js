const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.send(`
    <h1> 
      Hola Oswaldo
    </h1>
  `)
});

module.exports = router;
