/* const dataBase = require('../db/dataBase');
const db = require('../database/models/');
const op = db.Sequelize.Op;
const product = db.Products;

const searchResultsController = {
    findProduct: (req, res) => {
        let palabraBuscada = req.query.search;
        let filtro ={
            where :{
             [op.or]: [
               { model: { [op.like]: `%${ palabraBuscada}%` } },
               { description: { [op.like]: `%${ palabraBuscada}%` } }
             ]
           }
           }
      
        product.findAll(filtro).then((result) => {
            res.render('search-results', { products : result } )
        }).catch((err) => {
            console.log(err);
        });
    }

};

module.exports = searchResultsController; */