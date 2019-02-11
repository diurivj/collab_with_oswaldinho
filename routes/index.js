const express = require('express');
const router  = express.Router();

/* GET home page */

router.get('/', (req, res, next) => {
  res.send(`Que pedo putita`)
});

router.get('/nuevaruta', (req, res)=>{
  res.send('Ya vamos a beber!!!')
})

module.exports = router;
