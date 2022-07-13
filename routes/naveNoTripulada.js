import { Router } from 'express';
import { getNavesNoTripuladas, getNavesNoTripuladasId, crearNaveNoTripulada } from '../controllers/naveNoTripulada.js';

const routerNaveNoTripulada = Router();

routerNaveNoTripulada.get('/api/naveNoTripulada', getNavesNoTripuladas);

routerNaveNoTripulada.get('/api/naveNoTripulada/:id', getNavesNoTripuladasId);

routerNaveNoTripulada.post('/api/naveNoTripulada', crearNaveNoTripulada);

export default routerNaveNoTripulada;