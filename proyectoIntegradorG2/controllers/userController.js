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
        let errors = {};
        let filtro = {
            where: [{ email: req.body.email }]
        };
        user.findOne(filtro)
        .then(result => {
            console.log(result)
            if (result != undefined){
                errors.message = "El mail ya existe";
                res.locals.errors = errors;
                return res.render('register');
            }else{
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
               
            }
        })
    
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
        if (req.session.user != undefined) {
        producto.findAll({
            where: [{ userId: req.session.user.id }]
        })
            .then(resultado => {
                let filtro = {where: [{seguido: req.session.user.id}]}
                follower.findAll(filtro)
                .then(result => {
                    console.log(result)
                    res.render('profile', {
                        productos: resultado,
                        seguidores: result
                    })
                })
                })
                .catch(err => console.log(err));
        } else {
            res.redirect('/users/login')
        }
    },

    profileUsers: (req, res) => {
        let usuario = req.params.usuario;
        user.findOne({
            include: {
                all: true,
                nested: true
            },
            where: [{ usuario: usuario }]
        })
            .then(resultado => {
                let idUsuario = resultado.id;
                producto.findAll({
                    where: [{ userId: idUsuario }]
                })
                .then(seguidores => {
                    let filtro = {where: [{seguido: idUsuario}]}
                    follower.findAll(filtro)
                    .then(result => {
                       res.render('profileUsers',{
                        productosUsuario: result,
                        usuario: resultado,
                        seguidores: seguidores,
                    })                  
                })
            })
        })
            .catch(err => console.log(err));

    },
    follow: (req, res) => {
        let errors = {}
        let info = req.body
        let seguidor = {
            seguidor: req.session.user.id, /*id del usuario en sesion*/
            seguido: info.seguidoId,
        }
        console.log("SEGUIDOR" + req.session.user.id + "SEGUIDO" + info.seguidoId)
        
        filtro = {
            where:[{seguidor: req.session.user.id, seguido: info.seguidoId}]
        }
        console.log(filtro)
        follower.findOne(filtro)
        .then(result => {
            console.log("ESTE ES EL RESULTADO" + result)
            if (result === null) {
                follower.create(seguidor)
                .then(resultado => {res.redirect('/')})
                .catch(err => console.log(err))
            } else {
                errors.message = "Usted ya sigue a este usuario"
                console.log(errors.message)
                res.locals.errors = errors
                user.findOne({
                    include: {
                        all: true,
                        nested: true
                    },
                    where: [{ usuario: info.usuario }]
                })
                    .then(resultado => {
                        producto.findAll({
                            where: [{ userId: info.seguidoId }]
                        })
                        .then(result => {
                            console.log(resultado)
                            res.render('profileUsers',{
                                productosUsuario: result,
                                usuario: resultado,
                        })
                    })
                })
            }
        })

        
    },

    logout: (req, res) => {
        req.session.destroy();
        res.clearCookie('userId');
        return res.redirect('login')
    },
};

module.exports = controller;