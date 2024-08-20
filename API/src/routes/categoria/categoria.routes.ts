//Definicion de rutas

import { Router } from "express";

//Importar los controller
import * as categoriaController from "./categoria.controller";

const router = Router();

router.get('/categorias',categoriaController.getcategorias);
router.post('/categorias',categoriaController.createcategorias);
router.put('/categorias',categoriaController.updatecategorias);
router.delete('/categorias',categoriaController.deletecategorias);




export default router;