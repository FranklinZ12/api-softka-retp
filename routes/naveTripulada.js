import { Router } from 'express';
import { getNavesTripuladas, crearNaveTripulada } from '../controllers/naveTripulada.js';

const routerNaveTripulada = Router();

routerNaveTripulada.get('/api/naveTripulada', getNavesTripuladas);

routerNaveTripulada.post('/api/naveTripulada', crearNaveTripulada);

export default routerNaveTripulada;