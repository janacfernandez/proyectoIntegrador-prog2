const data = require('../db/data');
const db = require("../database/models");
const product = db.Product;
const bcrypt = require('bcryptjs');

const controller = {
    detail: (req, res) => {
        let id = req.params.id;

        product.findByPk(id).then((result)=>{
            let product = {
                img: '',
                nombre: result.nombre,
                descripcion: result.descripcion,
                anio: result.anio,
                createdAt: new Date(),
                updatedAt: new Date()
            }
            return res.render("product-detail", {
                product : product
            })
        }) },

    add: (req, res) =>  res.render('product-add'),

    procesarAdd: (req, res) => {
        let info = req.body;
        let producto = {
            img: '',
            nombre: info.nombre,
            descripcion: info.descripcion,
            anio: info.anio,
            createdAt: new Date(),
            updatedAt: new Date()
        }
        product.create(producto)
        .then((result) => {
            return res.redirect("/")
          }).catch((err) => {
            return res.send("Hay un error" + err)
          });
        }, 
        
    edit: (req, res) => {
        let id = req.params.id;
        product.findByPK(id)
        .then((result) => {
           
            let producto = {
                img: '',
                nombre: result.nombre,
                descripcion: result.descripcion,
                anio: result.anio,
                createdAt: new Date(),
                updatedAt: new Date()
            }
            return res.render(),( 'product-edit',{ product : producto})
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
            createdAt: new Date(),
            updatedAt: new Date()
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
    }, 
    destroy: (req, res) => {
        return res.send("ruta para el destroy")
    }
}; 
module.exports = controller;