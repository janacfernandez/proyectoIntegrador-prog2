const data = require('../db/data');
const db = require("../database/models");
const Comentario = db.Comentario; /* El alias que le pondre a mi modelo */
const product = db.Product; /* El alias que le pondre a mi modelo */
const bcrypt = require('bcryptjs');

const controller = {
    detail: (req, res) => res.render('product-detail', {
        listaAutos: data.productos,
        id: req.params.id - 1,
        comment: data.comentarios
    }),

    add: (req, res) => res.render('product-add'),

    procesarAdd: (req, res) => {
        let info = req.body;
        let producto = {
            img: '',
            nombre: info.nombre,
            descripcion: info.descripcion,
            anio: info.anio,
            created_at: new Date(),
            updated_at: new Date()
        }
        product.create(producto)
            .then((result) => {
                return res.redirect("/")
            }).catch((err) => {
                return res.send("Hay un error" + err)
            });
    },

    edit: (req, res) => {

        product.findByPK(id) // este id de donde sale? hacer
            .then((result) => {
                let producto = {
                    img: req.file.filename,
                    nombre: info.nombre, // que es info? hay que sacar de result.dataValues
                    descripcion: info.descripcion,
                    anio: info.anio,
                    created_at: new Date(),
                    updated_at: new Date()
                }
                return res.render(), ('productEdit', { product: producto }) // ver, raro 
            })
    },

    updateAdd: (req, res) => {
        let info = req.body;

        let idEdit = req.params.id;

        let producto = {
            img: '',
            nombre: info.nombre,
            descripcion: info.descripcion,
            anio: info.anio,
            created_at: new DATE(),
            updated_at: new DATE()
        }

        let filter = {
            where: {
                id: idEdit
            }
        }

        product.updateAdd(producto, filter)
            .then((result) => {
                return res.redirect("/");
            }).catch((err) => {
                return res.send(err)
            });
    },

    comentarios: (req, res) => {

        Comentario.findAll({
            limit: 10,
            order: [
                ['created_at', 'DESC']
            ]
        })
    }
};


module.exports = controller;