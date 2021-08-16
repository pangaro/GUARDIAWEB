import { Router } from 'express';
import app from '../app';

import { getServicio, createNewServicio, getServicioById, deleteServicioById, updateServicioById } from '../controllers/servicio.controllers';

const router = Router();
 
router.get( '/servicio', getServicio );

router.post( '/servicio', createNewServicio );

router.get( '/servicio/:id', getServicioById );

router.delete( '/servicio/:id', deleteServicioById );

router.put( '/servicio/:id', updateServicioById );

export default router;