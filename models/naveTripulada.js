import mongoose from 'mongoose';

//DEFINIR ESQUEMAS
const { Schema, model } = mongoose;

const NaveTripuladaSchema = new Schema({
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
    capacidadPersonas: {
        type: String,
        required: true
    }
});

const ModeloNaveTripulada = model('NaveTripulada', NaveTripuladaSchema);

export { ModeloNaveTripulada };
