import { Router } from 'express';
import { getNavesTripuladas, getNavesTripuladasId, crearNaveTripulada } from '../controllers/naveTripulada.js';

const routerNaveTripulada = Router();

routerNaveTripulada.get('/api/naveTripulada', getNavesTripuladas);

routerNaveTripulada.get('/api/naveTripulada/:id', getNavesTripuladasId);

routerNaveTripulada.post('/api/naveTripulada', crearNaveTripulada);

export default routerNaveTripulada;