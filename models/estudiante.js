const { Schema, model } = require('mongoose');


const EstudiantesSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'el nombre es obligatorio']
    },
    apellido: {
        type: String,
        required: [true, 'el apellidos es obligatorio']
    },
    institucion: {
        type: String,
        required: [true, 'la institucion es obligatoria']
    },
    tipoIdentificacion: {
        type: String,
        require: [true, 'El tipo de Identificacion es Obligatorio'],
    },
    identificacion: {
        type: Number,
        required: [true, 'la identificacion es obligatoria'],
        unique: true,
    },
    correo:{
        type: String,
        required: [true, 'el correo es obligatorio'],
        unique: true
    },
    password:{
        type: String,
        required: [true, 'la password es obligatorio'],    
    },
    rol:{
        type: String,
        require: true,
        emun: ['ADMIN','USER']
    },
    estado: {
        type: Boolean,
        default: true,
    },
    // resetToken : {
    //     type: String,
    // },
}, { timestamps: {} }, );




module.exports = model('Estudiantes', EstudiantesSchema);