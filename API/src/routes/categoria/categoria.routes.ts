//Definicion de rutas

import { Router } from "express";

const router = Router();

router.get('/categorias',(req,res)=>{
    res.json('GettingCategorias')
})
router.post('/addcategoria',(req,res)=>{
    res.json('Add Category ')
})

router.get('/categoria/:id',(req,res)=>{
    const idd = req.params.id
    res.send(`categoria encontrado ${idd}`)
})

router.put('/categoria',(req,res)=>{
  
})


export default router;