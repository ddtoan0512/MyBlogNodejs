const express = require('express');
const router  = express.Router();

router.get('/', (req, res)=>{
    res.render('/user/index', {
        name: 'Toan'
    });
})

module.exports = router;