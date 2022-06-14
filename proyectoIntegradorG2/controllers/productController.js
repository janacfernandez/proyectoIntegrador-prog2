const data = require('../db/data');
const db = require("../database/models");
const Product = db.Product;
const bcrypt = require('bcryptjs');

const controller = {
    detail: (req, res) => {
        let id = req.params.id;
        Product.findByPk(id).then((result)=>{
            let product = {
                id: result.dataValues.id,
                img: result.dataValues.img,
                nombre: result.nombre,
                descripcion: result.descripcion,
                anio: result.anio,
                createdAt: new Date(),
                updatedAt: new Date()
            }
            return res.render('product-detail', {
                listaAutos: product})
        })
        .catch((err) => {
            console.log(err);
        });
        },

    add: (req, res) =>  res.render('product-add'),

    store: (req, res) => {
        let info = req.body;
        let imgProductAdd = req.file.filename; 
        let product = {
            img: imgProductAdd,
            nombre: info.nombre,
            descripcion: info.descripcion,
            anio: info.anio,
            createdAt: new Date(),
            updatedAt: new Date()
        }

        Product.create(product)
        .then((result) => {
            return res.redirect("/")
          }).catch((err) => {
            return res.send("Hay un error" + err)
          });
        }, 
        
    edit: (req, res) => {
        let id = req.params.id;

        Product.findByPk(id)
        .then((result) => {
            let product = {
                id: result.dataValues.id, 
                img: result.dataValues.img,
                nombre: result.dataValues.nombre,
                descripcion: result.dataValues.descripcion,
                anio: result.dataValues.anio,
            }
            return res.render('product-edit', {
                listaAutos: product})
        })
        .catch((err) => {
            console.log(err);
        });
    },

    updateProd : (req, res) => {
        let info = req.body;
        let imgProductEdit = req.file.filename; 
        let idEdit = req.params.id;

        let producto = {
            img:imgProductEdit,
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
        
        Product.update(producto, filter)
        .then((result) => {
           return res.redirect("/");
        }).catch((err) => {
           return res.send(err)
        }); 
    }, 
    delete: (req, res) => {
        let idDelete = req.params.id;
        Product.destroy({
            where : {
                id : idDelete
            }
        })
        .then((result) => {
            console.log(result);
            return res.redirect('/')
        })
    }
}; 
module.exports = controller;

//  comentarios: (req, res) => {

    // Comentario.findAll({
   //     limit: 10,
     //   limit: 20,
      //  order: [
       //     ['created_at', 'DESC']
      //  ]

    /*   procesarComentarios : (req, res) => {
        let info = req.body
        let comentario = {
            comentario : info.comentario
        }
        Comentario.create(comentario)
        .then((result) => {
            return res.redirect('/products/')
        }).catch((err) => {
            console.log(err);
        });
    },
    showComentarios : (req, res) => {
        let id = req.params.id;
        Comentario.findByPk(id).then((result) => {
            let comentario = {
                comentario: result.comentario, 
            }
        return res.render('products', {comentarios : comentario})
        }).catch((err) => {
            console.log(err);
        });
    },

     */
