const users = require('../db/data');


const controller = {
    login: (req,res) => {
        return res.render('login')
    }, 
    register: (req,res) => {
        return res.render('register')
    }, 
    profileEdit: (req,res) => {
        return res.render('profile-edit',{
            listaAutos : users.productos,
            nombreUsuario : users.usuario.usuario,
            img : users.usuario.foto,
           }) 
    }, 
   profile: (req, res) => { 
       return res.render('profile',{
        listaAutos : users.productos,
        nombreUsuario : users.usuario.usuario,
        img : users.usuario.foto,
       }) 

   },

};

module.exports = controller;