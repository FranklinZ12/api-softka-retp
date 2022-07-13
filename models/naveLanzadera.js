import mongoose from 'mongoose';

//DEFINIR ESQUEMAS
const { Schema, model } = mongoose;

const NaveLanzaderaSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    tipo:{
        type: String,
        default:'Vehículo lanzadera'
    },
    peso:{
        type: String,
        required: true
    },
    pais: {
        type: String,
        required: true
    },
    altura: {
        type: String,
        required: true
    },
    pesoCarga: {
        type: String,
        required: true
    },
    empuje:{
        type: String,
        required: true
    }
});

const ModeloLanzadera = model('NaveLanzadera', NaveLanzaderaSchema);

export { ModeloLanzadera };

