const db = require("../database/models");
const user = db.User;
const bcrypt = require('bcryptjs');

const users = require('../db/data');


const controller = {

    login: (req,res) => res.render('login'),

    procesarLogin: (req,res) => {
        let info = req.body;
        let filtro = {
            where: [{email: info.email}]
        };
        user.findOne(filtro)
        .then(resultado => {
            if (resultado != null) {
                let contraEncriptada = bcrypt.compareSync(info.contrasenia, resultado.contrasenia)
                if (contraEncriptada) {
                    return res.redirect('/users/profile')
                } else {
                    this.contraseniaValida = false
                    return res.redirect('/users/login');
                }
            } else {
                return res.send("Mail incorrecto");
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
            updated_at :  new Date(),
        }

        user.create(usuario)
        .then(resultado => res.redirect("/users/login"))
        .catch(err => console.log(err));
    },


    profileEdit: (req,res) => res.render('profile-edit',{ 
        listaAutos: users.productos, 
        nombreUsuario: users.usuario.usuario, 
        img: users.usuario.foto
        }), 

   profile: (req, res) =>  res.render('profile',{ 
       listaAutos: users.productos, 
       img: users.usuario.foto, nombreUsuario: users.usuario.usuario, 
       emailUsuario: users.usuario.email}),
};


module.exports = controller;