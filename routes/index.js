const express = require('express');
const router  = express.Router();

/* GET home page */

router.get('/', (req, res, next) => {
  res.send(`
    <h1> 
      Hola Oswaldo
      qué onda bro 🔥
      saca las chelas prro!!! 😎
    </h1>
  `)
});

router.get('/nuevaruta', (req, res)=>{
  res.send('Ya vamos a beber!!!, saca el Gin 💅🏽')
})

module.exports = router;
