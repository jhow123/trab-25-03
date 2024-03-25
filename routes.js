const express = require0('express');
const router = express.Router();


router.get('/exemplo', (req, res) => {
    res,json({
        message: 'olá rota on'
    });
});

module.exports = router ;