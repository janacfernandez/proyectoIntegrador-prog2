const autos = require('../db/data');

const controller = {
    index: (req, res) => res.render('index', {
           listaAutos: autos.productos
       }),

    searchResults: (req, res) => {
        let resultado = req.query.search;
        let autosEncontrados = [];
        for (let i = 0; i < autos.productos.length; i++) {
            if (autos.productos[i].nombre.toLowerCase().includes(resultado) || autos.productos[i].anio == resultado) {
                autosEncontrados.push(autos.productos[i])
            }
        }
        return res.render('search-results', {
            listaAutos: autosEncontrados,
            busq: req.query.search,
        })
     },
};


module.exports = controller;