import { Router } from 'express';
import app from '../app';

import { getCategoria, createNewCategoria, getCategoriaById, deleteCategoriaById, updateCategoriaById } from '../controllers/categoria.controllers';

const router = Router();
 
router.get( '/categoria', getCategoria );

router.post( '/categoria', createNewCategoria );

router.get( '/categoria/:id', getCategoriaById );

router.delete( '/categoria/:id', deleteCategoriaById );

router.put( '/categoria/:id', updateCategoriaById );

export default router;