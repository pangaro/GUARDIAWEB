import express from 'express';
import config from './config';

import categoriaRoutes from './routes/categoria.routes';

import servicioRoutes from './routes/servicio.routes';

const app = express() ;


//settings
app.set('port', config.port);

//midelware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(categoriaRoutes);

app.use(servicioRoutes);

export default app;