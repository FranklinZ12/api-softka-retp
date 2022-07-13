import mongoose from 'mongoose';

//DEFINIR ESQUEMAS
const { Schema, model } = mongoose;

const NaveNoTripuladaSchema = new Schema({
    imgUrl:{
        type: String,
    },
    nombre: {
        type: String,
        required: true
    },
    peso: {
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
    objetivo: {
        type: String,
        required: true
    },
    empuje: {
        type: String,
        required: true
    },
    estado: {
        type: String,
        enum: ['disponible', 'en uso', 'en mantenimiento'],
        required: true
    }
});

const ModeloNaveNoTripulada = model('NaveNoTripulada', NaveNoTripuladaSchema);

export { ModeloNaveNoTripulada };
