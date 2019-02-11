const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {  
  res.render('index');
});

router.get('/nuevaruta', (req, res)=>{
  res.send('Ya vamos a beber!!!')
})

module.exports = router;
