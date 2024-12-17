const mongoose = require('mongoose');
const uri = 'mongodb://localhost:27017/Web_Users';

mongoose.connect(uri,{});

const usuariosSchema = new mongoose.Schema({
    mail: {
      type: String,
      require: true
    },
    password: {
      type: String,
      require: true
    }
  },{
    versionKey: false,
    collection:"usuarios"
  });

  const contactosSchema = new mongoose.Schema({
    name: {
      type: String,
      require: true
    },
    surname: {
      type: String,
      require: true
    },
    age: {
        type: Number,
        require: true
    },
    usuario: {
      type: mongoose.Schema.Types.ObjectId, refs: "usuarios"
    }
  },{
    versionKey: false,
    collection:"contactos"
  });

const UsuariosModel = mongoose.model('UsuariosModel', usuariosSchema);
const ContactosModel = mongoose.model('ContactosModel', contactosSchema);

module.exports = UsuariosModel;
module.exports = ContactosModel;
