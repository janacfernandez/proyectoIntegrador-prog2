const db = require("../database/models");
const Product = db.Product;
let comment = db.Comment;


const controller = {
    detail: (req, res) => {
        let id = req.params.id;
        Product.findByPk(id).then((result) => {
            console.log(result)
            let product = {
                id: result.dataValues.id,
                img: result.dataValues.img,
                nombre: result.nombre,
                descripcion: result.descripcion,
                anio: result.anio,
                createdAt: new Date(),
                userId: result.userId,

            }
            console.log(product.userId.usuario)
            return res.render('product-detail', {
                listaAutos: product,
                usuario: product.userId,
            })
        })
            .catch(err => console.log(err));
    },

    add: (req, res) => res.render('product-add'),

    store: (req, res) => {
        let info = req.body;
        let imgProductAdd = req.file.filename;
        let product = {
            img: imgProductAdd,
            nombre: info.nombre,
            descripcion: info.descripcion,
            anio: info.anio,
            userId: req.session.user.id,
            createdAt: new Date(),

        }

        Product.create(product)
            .then((result) => {
                return res.redirect("/")
            })
            .catch(err => res.send("Hay un error" + err));
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
                    listaAutos: product
                })
            })
            .catch((err) => {
                console.log(err);
            });
    },

    updateProd: (req, res) => {
        let info = req.body;
        let imgProductEdit = req.file.filename;
        let idEdit = req.params.id;

        let producto = {
            img: imgProductEdit,
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
            where: {
                id: idDelete
            }
        })
            .then((result) => {
                console.log(result);
                return res.redirect('/')
            })
    },


    comments: (req, res) => {
        if (req.session.user == undefined) {
             res.redirect('register')
 
          }
         let info = req.body;
         let comentario = {
             comentarios: info.comentario,
             productId: req.params.id,
             userId: req.session.user.id,
         }
         comment.create(comentario)
             .then((result) => {
                 return res.redirect('/products/id/' + req.params.id)
             }).catch((err) => {
                 console.log("Este es el error" + err);
             });
 
     } }

   
      /*  
    
      let filtro1 = {
            include: {
                all: true,
                nested: true
            },
            order: [["comentarios", "createdAt", "DESC"]]
        }
        product.findByPk(id, filtro1)
            .then((result) => {
                return res.render('products', {product: result.dataValues})
            }).catch((err) => {
                console.log(err);
            }) */ 
           

module.exports = controller;

