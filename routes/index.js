const express = require('express');
const router  = express.Router();

/* GET home page */

router.get('/', (req, res, next) => {
  res.send(`Que pedo putita, no es cierto.
    .
      .
        . 
    vaya vaya tacubaya, si no conoce mejor ni venga 😎
  `)
});

router.get('/nuevaruta', (req, res)=>{
  res.send('Ya vamos a beber!!!')
})

module.exports = router;
