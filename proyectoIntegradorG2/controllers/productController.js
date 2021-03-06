const db = require("../database/models");
const product = db.Product;
let comment = db.Comment;

const controller = {
    detail: (req, res) => {
        let id = req.params.id;
        let filter = {
            include: {
                all: true,
                nested: true
            },
            order: [["comment", "createdAt", "DESC"]]
        }
        product.findByPk(id, filter)
        .then((result) => {
            return res.render('product-detail', {
                listaAutos: result,
            })
        }).catch(err => console.log(err));
    },

    add: (req, res) => {
        if (req.session.user == undefined) {
            res.redirect('/users/login')
        }
        else {
            return res.render('product-add')
        }
    },

    store: (req, res) => {
        let info = req.body;
        let imgProductAdd = req.file.filename;
        let producto = {
            img: imgProductAdd,
            nombre: info.nombre,
            descripcion: info.descripcion,
            anio: info.anio,
            userId: req.session.user.id,
            createdAt: new Date(),

        }

        product.create(producto)
            .then((result) => {
                return res.redirect("/")
            })
            .catch(err => res.send("Hay un error" + err));
    },

    edit: (req, res) => {

        if (req.session.user == undefined) {
            res.redirect('/users/login')
        }
        else {
            let id = req.params.id;
            product.findByPk(id)
                .then((result) => {
                    let product = {
                        id: result.dataValues.id,
                        img: result.dataValues.img,
                        nombre: result.dataValues.nombre,
                        descripcion: result.dataValues.descripcion,
                        anio: result.dataValues.anio,
                        updatedAt: new Date(),
                        userId: result.dataValues.userId
                    }
                    console.log(result.img)
                    return res.render('product-edit', {
                        listaAutos: product,
                    })
                })
                .catch((err) => {
                    console.log(err);
                });
        }

    },

    updateProd: (req, res) => {
        let info = req.body;
        let imgProductEdit = req.file.filename;
        let idEdit = req.params.id;
        console.log(imgProductEdit)
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

            product.update(producto, filter)
                .then(result => res.redirect("/products/id/" + idEdit))
                .catch(err => res.send(err));

    },
    
    delete: (req, res) => {
        let idDelete = req.params.id;
        product.destroy({
            where: {
                id: idDelete
            }
        })
        .then(result => res.redirect('/'))
        .catch(err => console.log(err))
    },

    comments: (req, res) => {
        if (req.session.user == undefined) {
            res.redirect('/users/login')

        } else {
            let info = req.body;
            let userId = req.session.user.id;
            let prodId = req.params.id;
            let comentario = {
                comentarios: info.comentarios,
                productId: prodId,
                userId: userId,
                createdAt: Date()
            }

            comment.create(comentario)
                .then(result => res.redirect('/products/id/' + prodId))
                .catch(err =>
                    console.log("Este es el error" + err));
        }
    }
}

module.exports = controller;

