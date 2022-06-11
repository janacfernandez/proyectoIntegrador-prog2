const data = require('../db/data');
const db = require("../database/models");
const Comentario = db.Comentario; /* El alias que le pondre a mi modelo */
const product = db.Product; /* El alias que le pondre a mi modelo */
const bcrypt = require('bcryptjs');
let imgProducto = req.file.img;

const controller = {
    detail: (req, res) => res.render('product-detail', {
        listaAutos: data.productos,
        id: req.params.id - 1,
        comment: data.comentarios
    }),

    add: (req, res) => res.render('product-add'),

    procesarAdd: (req, res) => {
        let info = req.body;
        let productoN = {
            img: imgProducto,
            nombre: info.nombre,
            descripcion: info.descripcion,
            anio: info.anio,
            createdAt: new Date(),
            updatedAt: new Date()
        }
        product.create(productoN)
        .then((result) => {
            return res.redirect("/")
          }).catch((err) => {
            return res.send("Hay un error" + err)
          });
        }, 
        
    edit: (req, res) => {
            return res.render('product-edit')
    },

    updateAdd: (req, res) => {
        let info = req.body;

        let idEdit = req.params.id;

        let producto = {
            img: imgProducto,
            nombre: info.nombre,
            descripcion: info.descripcion,
            anio: info.anio,
            createdAt: new Date(),
            updatedAt: new Date()
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
            limit: 20,
            order: [
                ['created_at', 'DESC']
            ]
        })
    }
};


module.exports = controller;