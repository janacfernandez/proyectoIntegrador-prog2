const users = require('../db/data');





const controller = {
    login: (req,res) => {
        return res.render('login')
    }, 
    register: (req,res) => {
        return res.render('register')
    }, 

};

module.exports = controller;