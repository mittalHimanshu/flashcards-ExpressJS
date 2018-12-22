const express = require('express');
const router = express.Router();

router.get('/' , (req, res) => {
    var name = req.cookies.username;
    if (name){
        res.render('index', {name});
    } else {
        res.redirect('/hello')
    }
});

router.get('/hello', (req, res) => {
    var name = req.cookies.username;
    if (name){
        res.redirect('/');
    } else {
        res.render('hello')
    }  
});

router.post('/goodbye', (req, res) => {
    res.clearCookie('username');
    res.redirect('/');
});

router.post('/hello', (req, res) => {
    res.cookie('username', req.body.username);
    res.redirect('/');     
});

module.exports = router;