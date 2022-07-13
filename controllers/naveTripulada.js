import { response } from "express";
import { ModeloNaveTripulada } from "../models/naveTripulada.js";

const getNavesTripuladas = async (req, res = response) => {
    const navesTripuladas = await ModeloNaveTripulada.find();
    res.json(navesTripuladas);
}

const getNavesTripuladasId = async (req, res = response) => {
    const { id } = req.params;
    try {
        const naveTripulada = await ModeloNaveTripulada.findById(id);
        if (!naveTripulada) {
            res.status(404).json({ msg: 'Nave tripulada no encontrada' });
        }
        res.json(naveTripulada);
    } catch (error) {
        res.status(500).json({ msg: 'Hubo un error, id no encontrado' });
    }
}

const crearNaveTripulada = async (req, res = response) => {
    const naveTripulada = new ModeloNaveTripulada(req.body);
    try {
        const naveTripuladaDB = await naveTripulada.save();
        res.json({
            ok: true,
            naveTripulada: naveTripuladaDB
        });
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            error
        });
    }
}

export { getNavesTripuladas, getNavesTripuladasId, crearNaveTripulada };