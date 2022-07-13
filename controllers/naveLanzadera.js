import { response } from "express";
import { ModeloLanzadera } from "../models/naveLanzadera.js";

const getNavesLanzadera = async (req, res = response) => {
    const navesLanzaderas = await ModeloLanzadera.find();
    res.json(navesLanzaderas);
}

const getNavesLanzaderaId = async (req, res = response) => {
    const { id } = req.params;
    try {
        const naveLanzadera = await ModeloLanzadera.findById(id);
        if (!naveLanzadera) {
            res.status(404).json({ msg: 'Nave lanzadera no encontrada' });
        }
        res.json(naveLanzadera);
    } catch (error) {
        res.status(500).json({ msg: 'Hubo un error, id no encontrado' });
    }
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