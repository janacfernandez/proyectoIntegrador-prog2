const users = require('../db/data');





const controller = {
    login: (req,res) => {
        return res.render('login')
    }

};

module.exports = controller;