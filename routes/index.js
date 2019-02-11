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

router.get('/nuevaruta', (req, res)=>{
  res.send('Ya vamos a beber!!!')
})

module.exports = router;
