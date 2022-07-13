import { Router } from 'express';
import { getNavesLanzadera, getNavesLanzaderaId, crearNaveLanzadera } from '../controllers/naveLanzadera.js';

const routerNaveLanzadera = Router();

routerNaveLanzadera.get('/api/naveLanzadera', getNavesLanzadera);

routerNaveLanzadera.get('/api/naveLanzadera/:id', getNavesLanzaderaId);

routerNaveLanzadera.post('/api/naveLanzadera', crearNaveLanzadera);

export default routerNaveLanzadera;