const users = require('../db/data');


const controller = {
    login: (req,res) => res.render('login'),
     
    register: (req,res) =>  res.render('register'),

    profileEdit: (req,res) => res.render('profile-edit',{ 
        listaAutos : users.productos, 
        nombreUsuario : users.usuario.usuario, 
        img : users.usuario.foto,
           }), 

   profile: (req, res) =>  res.render('profile',{ 
       listaAutos : users.productos, 
       img : users.usuario.foto, nombreUsuario: users.usuario.usuario, 
       emailUsuario:users.usuario.email}),

};

module.exports = controller;