const autos = require('../db/data');

const controller = {

detail:  (req, res) => {
       return res.render('product-detail')
    },
add: (req, res) => {
   return res.render() 
 }, 

}; 

module.exports = controller;