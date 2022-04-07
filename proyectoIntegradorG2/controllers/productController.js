const data = require('../db/data');

const controller = {

detail:  (req, res) => {
       return res.render('product-detail', {
          listaAutos : data.productos,
          id: req.params.id - 1,
         
          
       })

    },
    add: (req, res) => {
      return res.render('product-add'), {
   
      }
    }, 


 profile : (req, res) => {
    return res.render('profile', {
       nombreUsuario : data.usuario.usuario, 
    })
 }

}; 

module.exports = controller;