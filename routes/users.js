const express = require('express')
const bodyParser = require('body-parser');
const path = require('path');
const UsuariosModel = require('../models/users');
const ContactosModel = require('../models/users');
const router = express.Router()

router.get("/contactos", async function(req,res){
    const contactos = await ContactosModel.find()
    .then(contactos => res.json(contactos))
    .catch(err => res.json(contactos) )
    console.log("Todos los contactos");
})

router.get("/mostrar/:id", async function(req,res){
    const id_contacto = req.params.id;
    const contacto = await ContactosModel.find({_id: id_contacto})
    console.log("Contacto/s encontrado/s", contacto);
    res.send(contacto)
})

router.post("/enviarRegistro", async function(req,res){
    try {
        const name = req.body.name;
        const surname = req.body.surname;
        const age = req.body.age;
        const contacto = new ContactosModel({
            name : name,
            surname : surname,
            age : age
        });
        const save = await contacto.save();
        console.log("Contacto creado");
        console.log(save);
        return res.json(save);
    } catch (error) {
        console.log('Error', error);
        return res.status(500).json("message: Internal server error");
        console.log(error);
    }
})

router.put("/modificar/:id", async function(req,res){
    try {
        const id = req.params.id;
        const update = req.body;
        const contactoUpdate = await ContactosModel.findByIdAndUpdate(id,update,{new:true,runValidators:true})
        if(!contactoUpdate){
            res.status(404).json({missing:"error"})
            res.status(contactoUpdate)
        }
    } catch (error) {
        res.json({error:err.massage})
    }
})

router.delete("/delete/:id", async function(req,res){
    const id = req.params.id;
    res.send(await ContactosModel.deleteOne({_id:id}));
    console.log("contacto eliminado");
})

module.exports = router;