const express = require('express')
const router = expess.Router();

router.get('/hello/world', function(req, res){
    res.cookie('XSRF-TOKEN', req.csrfToken());
    res.send('Hello World');
});

module.exports = router;