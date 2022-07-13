import { response } from "express";
import { ModeloNaveNoTripulada } from "../models/naveNoTripulada.js";

const getNavesNoTripuladas = async (req, res = response) => {
    const navesNoTripuladas = await ModeloNaveNoTripulada.find();
    res.json(navesNoTripuladas);
}

const getNavesNoTripuladasId = async (req, res = response) => {
    const { id } = req.params;
    try {
        const naveNoTripulada = await ModeloNaveNoTripulada.findById(id);
        if (!naveNoTripulada) {
            res.status(404).json({ msg: 'Nave no tripulada no encontrada' });
        }
        res.json(naveNoTripulada);
    } catch (error) {
        res.status(500).json({ msg: 'Hubo un error, id no encontrado' });
    }
}

const crearNaveNoTripulada = async (req, res = response) => {
    const naveNoTripulada = new ModeloNaveNoTripulada(req.body);
    try {
        const naveNoTripuladaDB = await naveNoTripulada.save();
        res.json({
            ok: true,
            naveNoTripulada: naveNoTripuladaDB
        });
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            error
        });
    }
}

export { getNavesNoTripuladas, getNavesNoTripuladasId, crearNaveNoTripulada };