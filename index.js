import express from 'express';
import dotenv from "dotenv";
import dbConnection from './database/config.js';
import routerNaveNoTripulada from './routes/naveNoTripulada.js';
import routerNaveLanzadera from './routes/naveLanzadera.js';
import routerNaveTripulada from './routes/naveTripulada.js';
import cors from "cors";


//VARIABLES DE ENTORNO
dotenv.config();

//ACTIVACIÓN DE EXPRESS
const app = express();

//Base de datos
dbConnection();

//ACTIVACIÓN DE CORS
app.use(cors());

// Directorio Público
app.use(express.static('public'));

//Lectura y parseo del body
app.use(express.json());

app.use(routerNaveNoTripulada);
app.use(routerNaveLanzadera);
app.use(routerNaveTripulada);

//CONFIGURACIÓN DE SERVIDOR
app.listen({ port: process.env.PORT || 4000 }, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});