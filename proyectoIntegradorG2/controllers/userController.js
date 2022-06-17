const db = require("../database/models");
const user = db.User;
const bcrypt = require('bcryptjs');
const User = require("../database/models/User");
const producto = db.Product;
const follower = db.Follower;

const controller = {
    login: (req, res) => res.render('login'),

    procesarLogin: (req, res) => {
        let errors = {};
        let info = req.body;
        let filtro = {
            where: [{ email: info.email }]
        };
        user.findOne(filtro)
            .then(resultado => {
                if (resultado != null) {
                    let contraEncriptada = bcrypt.compareSync(info.contrasenia, resultado.contrasenia)
                    if (contraEncriptada) {
                        req.session.user = resultado.dataValues;
                        if (req.body.recordar != undefined) {
                            res.cookie('userId', resultado.dataValues.id, { maxAge: 1000 * 60 * 10 })
                        }
                        return res.redirect('/users/profile')
                    } else {
                        errors.message = "Contraseña incorrecta";
                        res.locals.errors = errors;
                        return res.render('login'); //Render aca
                    }
                } else {
                    errors.message = "Mail incorrecto";
                    res.locals.errors = errors;
                    return res.render('login');
                }
            })
            .catch(err => console.log(err));
    },

    register: (req, res) => res.render('register'),

    procesarRegister: (req, res) => {
        let info = req.body;
        let imgRegister = req.file.filename;
        let usuario = {
            nombre: info.name,
            apellido: info.apellido,
            email: info.email,
            usuario: info.usuario,
            contrasenia: bcrypt.hashSync(info.contrasenia, 10),
            fDeNac: info.fDeNac,
            dni: info.dni,
            foto: imgRegister,
            created_at: new Date(),
        }

        user.create(usuario)
            .then(resultado => res.redirect("/users/login"))
            .catch(err => console.log(err));
    },

    profileEdit: (req, res) => {
        if (req.session.user != undefined) {
            res.render('profile-edit')
        } else {
            res.redirect('/users/login')
        }
    },

    profileUpdate: (req, res) => {
        let info = req.body;
        let idEdicion = req.session.user.id;
        let imgPerfil = req.file.filename;

        let usuario = {
            nombre: info.name,
            apellido: info.apellido,
            email: info.email,
            usuario: info.usuario,
            fDeNac: info.fDeNac,
            dni: info.dni,
            foto: imgPerfil,
            updated_at: new Date(),
        }

        let filtro = {
            where: {
                id: idEdicion
            }
        }

        user.update(usuario, filtro)
            .then(resultado => {
                req.session.user = resultado.dataValues;
                res.redirect('/users/profile')
            })
            .catch(err => console.log(err));
    },

    profile: (req, res) => {
        producto.findAll({
            where: [{ userId: req.session.user.id }]
        })
            .then(resultado => {

                res.render('profile', {
                    productos: resultado
                })
            })
            .catch(err => console.log(err));

    },

    profileUsers: (req, res) => {
        // follower.findAll()
        // .then(result => console.log(result))
        // .catch(err => console.log(err))
        let idProd = req.params.id;
        // console.log(idProd);
        producto.findOne({
            include: {
                all: true,
                nested: true
            },

            where: [{ id: idProd }]
        })
            .then(resultado => {
                res.render('profileUsers', {
                    productos: resultado.dataValues
                })
            })
            .catch(err => console.log(err));

    },
    follow: (req, res) => {
        let info = req.body
        //console.log("ESTE ES EL ID QUE BUSCABAS" + info.seguidoId)
        let seguidor = {
            seguidor: req.session.user.id, /*id del usuario en sesion*/
            seguido: info.seguidoId,
        }
        // console.log(seguidor)
        follower.create(seguidor)
            .then(resultado => res.redirect('/'))
            .catch(err => console.log(err))
    },

    logout: (req, res) => {
        req.session.destroy();
        res.clearCookie('userId');
        return res.redirect('login')
    },
};

module.exports = controller;