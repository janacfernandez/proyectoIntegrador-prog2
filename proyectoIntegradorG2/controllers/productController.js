const data = require('../db/data');

const controller = {

detail:  (req, res) => {
       return res.render('product-detail', {
          listaAutos : data.productos,
          id: req.params.id,
         comment : data.comentarios,
          
       })

    },
    add: (req, res) => {
      return res.render('product-add'), {
   
      }
    }, 

}; 

module.exports = controller;