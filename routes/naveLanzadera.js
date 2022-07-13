import { Router } from 'express';
import { getNavesLanzadera, crearNaveLanzadera } from '../controllers/naveLanzadera.js';

const routerNaveLanzadera = Router();

routerNaveLanzadera.get('/api/naveLanzadera', getNavesLanzadera);

routerNaveLanzadera.post('/api/naveLanzadera', crearNaveLanzadera);

export default routerNaveLanzadera;