const data = require('../db/data');

const controller = {

    detail:  (req, res) => res.render('product-detail', { 
        listaAutos : data.productos,
        id: req.params.id - 1, 
        comment : data.comentarios}),

    add: (req, res) => res.render('product-add', {
        nombreUsuario: data.usuario.usuario})
}; 


module.exports = controller;