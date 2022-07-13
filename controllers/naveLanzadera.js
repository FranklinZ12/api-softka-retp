import { response } from "express";
import {ModeloLanzadera} from "../models/naveLanzadera.js";

const getNavesLanzadera = async (req, res = response) => {
    const navesLanzaderas = await ModeloLanzadera.find();
    res.json(navesLanzaderas);
}

const getNavesLanzaderaId = async (req, res = response) => {
    const { id } = req.params;
    const naveLanzadera = await ModeloLanzadera.findById(id);
    res.json(naveLanzadera);
}

const crearNaveLanzadera = async (req, res = response) => {
    const naveLanzadera = new ModeloLanzadera(req.body);
    try {
        const naveLanzaderaDB = await naveLanzadera.save();
        res.json({
            ok: true,
            naveLanzadera: naveLanzaderaDB
        });
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            error
        });
    }
}

export { getNavesLanzadera, getNavesLanzaderaId, crearNaveLanzadera };