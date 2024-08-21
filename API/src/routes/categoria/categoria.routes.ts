//Definicion de rutas

import { Router } from "express";

//Importar los controller
import * as categoriaController from "./categoria.controller";

const router = Router();

router.get('/categorias',categoriaController.getcategorias);
router.get('/categorias/:id',categoriaController.getcategoria)
router.post('/categorias',categoriaController.createcategorias);
router.put('/categorias/:id',categoriaController.updatecategorias);
router.delete('/categorias/:id',categoriaController.deletecategorias);




export default router;