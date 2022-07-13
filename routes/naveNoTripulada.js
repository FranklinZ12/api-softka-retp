import { Router } from 'express';
import { getNavesNoTripuladas, crearNaveNoTripulada } from '../controllers/naveNoTripulada.js';

const routerNaveNoTripulada = Router();

routerNaveNoTripulada.get('/api/naveNoTripulada', getNavesNoTripuladas);

routerNaveNoTripulada.post('/api/naveNoTripulada', crearNaveNoTripulada);

export default routerNaveNoTripulada;