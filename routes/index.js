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

router.get('/iwork', (req, res)=>{
  res.send('Ya hice toda el app maldito 🖕🏽')
})

module.exports = router;
