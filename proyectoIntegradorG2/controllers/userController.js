const db = require("../database/models");
const user = db.User;
const bcrypt = require('bcryptjs');

const users = require('../db/data');


const controller = {


    login: (req,res) => res.render('login'),

    procesarLogin: (req,res) => {

        let errors = {};
        let info = req.body;
        let filtro = {
            where: [{email: info.email}]
        };
        user.findOne(filtro)
        .then(resultado => {
            if (resultado != null) {
                let contraEncriptada = bcrypt.compareSync(info.contrasenia, resultado.contrasenia)
                if (contraEncriptada) {
                    req.session.user = resultado.dataValues;
                    if(req.body.recordar != undefined){
                        res.cookie('userId', resultado.dataValues.id)
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
     
    register: (req,res) =>  res.render('register'),

    procesarRegister: (req, res) => {
        let info = req.body;
        let usuario = {
            nombre: info.name,
            apellido: info.apellido,
            email: info.email,
            usuario: info.usuario,
            contrasenia: bcrypt.hashSync(info.contrasenia, 10),
            fDeNac: info.fDeNac,
            dni: info.dni,
            foto: info.foto,
            created_at : new Date(),
        }

        user.create(usuario)
        .then(resultado => res.redirect("/users/login"))
        .catch(err => console.log(err));
    },


    profileEdit: (req,res) => {
        if (req.session.user != undefined) {
            res.render('profile-edit')
        } else {
            res.redirect('/users/login')
        }
    },

    profileUpdate: (req, res) => {
        let info = req.body;
        let idEdicion = req.session.user.id;
    
        let usuario = {
            nombre: info.name,
            apellido: info.apellido,
            email: info.email,
            usuario: info.usuario,
            fDeNac: info.fDeNac,
            dni: info.dni,
            foto: info.foto,
            updated_at: new Date(),
        }
        let filtro = {
          where: {
            id: idEdicion
          }
        }
    
        user.update(usuario, filtro)
        .then (resultado => res.redirect('/'))
        .catch(err => console.log(err));
    },

   profile: (req, res) =>  {
    res.render('profile',{
        listaAutos: users.productos, 
        img: users.usuario.foto})
   },
    
    logout : (req, res) => {
        req.session.destroy();
        res.clearCookie('userId');
        return res.render('login')
    },
};


module.exports = controller;