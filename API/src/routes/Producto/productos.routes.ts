import {  Router } from "express";
import  * as ControllerProducto from "./productos.controller" 

const router = Router();

router.get('/productos',ControllerProducto.getProductos)
router.post('/productos',ControllerProducto.CreateProducto)
router.get('/productos/:id',ControllerProducto.getProducto)
router.put('/productos/:id',ControllerProducto.UpdateProducto)
router.delete('/productos/:id',ControllerProducto.deleteProducto)

export default router ; 