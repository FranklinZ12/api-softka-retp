import { response } from "express";
import { ModeloNaveNoTripulada } from "../models/naveNoTripulada.js";

const getNavesNoTripuladas = async (req, res = response) => {
    const navesNoTripuladas = await ModeloNaveNoTripulada.find();
    res.json(navesNoTripuladas);
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

export { getNavesNoTripuladas, crearNaveNoTripulada };