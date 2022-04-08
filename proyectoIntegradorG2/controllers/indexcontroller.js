const autos = require('../db/data');

const controller = {
    index: (req, res) => {
       return res.render('index', {
           listaAutos: autos.productos
       })
    },

    searchResults: (req, res) => {
        return res.render('search-results', {
            listaAutos: autos.productos
        })
     },
};

module.exports = controller;