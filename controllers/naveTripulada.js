import { response } from "express";
import { ModeloNaveTripulada } from "../models/naveTripulada.js";

const getNavesTripuladas = async (req, res = response) => {
    const navesTripuladas = await ModeloNaveTripulada.find();
    res.json(navesTripuladas);
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

export { getNavesTripuladas, crearNaveTripulada };