const db = require("../database/models");
const product = db.Product;
const bcrypt = require('bcryptjs');
const op = db.Sequelize.Op;

const controller = {
    index: (req, res) => {
        product.findAll({
            order: [
                ["createdAt", "DESC"]
            ],
            include: {
                all: true,
                nested: true
            }
        })
            .then((result) => {
                return res.render("index", { listaAutos: result });
            }).catch((err) => {
                console.log(err);
            });
    },
    searchResults: (req, res) => {
        let resultado = req.query.search;
        let filter = {
            where: {
                [op.or]: [
                    { nombre: { [op.like]: `%${resultado}%` } },
                    { descripcion: { [op.like]: `%${resultado}%` } },
                    { anio: { [op.like]: `%${resultado}%` } }
                ]
            },
            include: [{ association: 'user' }]
        }
        product.findAll(filter)
            .then((result) => {
                return res.render('search-results', { listaAutos: result, resultado: req.query.search })
            }).catch((err) => {
                console.log(err);
            });
    }

};

module.exports = controller;