const ContactosModel = require("./users")

const agenda = async() =>{
    const resultado = await ContactosModel.aggregate(
        [
            $lookup= {
                from:"usuariosModel",
                localField:"usuario",
                foreignField:"_id",
                as:"contactosUsuario"
            }
        ]
    )
    console.log(resultado)
}