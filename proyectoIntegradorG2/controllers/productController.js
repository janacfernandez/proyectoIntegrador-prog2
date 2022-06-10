const data = require('../db/data');
const db = require("../database/models");
const product = db.Product;
const bcrypt = require('bcryptjs');

const controller = {
    detail:  (req, res) => res.render('product-detail', { 
        listaAutos: data.productos,
        id: req.params.id - 1, 
        comment: data.comentarios}),

    add: (req, res) =>  res.render('product-add'),

    procesarAdd: (req, res) => {
        let info = req.body;
        let producto = {
            img: '',
            nombre: info.nombre,
            descripcion: info.descripcion,
            anio: info.anio,
            created_at: new DATE(),
            updated_at: new DATE()
        }
        product.create(producto)
        .then((result) => {
            return res.redirect("/")
          }).catch((err) => {
            return res.send("Hay un error" + err)
          });
        }, 

    edit: (req, res) => {
        product.findByPK(id)
        .then((result) => {
           
            let producto = {
                img: '',
                nombre: info.nombre,
                descripcion: info.descripcion,
                anio: info.anio,
                created_at: new DATE(),
                updated_at: new DATE()
            }
            return res.render(),( 'productEdit',{ product : producto})
        })
    },

    updateAdd : (req, res) => {
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
            where : {
                id: idEdit
            }
        }
        
        product.updateAdd(producto, filter)
        .then((result) => {
           return res.redirect("/");
        }).catch((err) => {
           return res.send(err)
        }); 
    }
   
}; 


module.exports = controller;