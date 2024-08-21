//Esto es para que entiendan el req y res el archivo 
import { RequestHandler } from "express";
import  Categoria  from "./Categoria";

export const createcategorias:RequestHandler  = async(req,res)=>{
    //Creamos un nuevo objeto categoria
    const categoria = new Categoria(req.body)
    //Para guardar en la BD 
    const savecategoria =  await categoria.save()

    console.log(savecategoria)
    res.json(savecategoria)
}
export const getcategorias:RequestHandler  =async(req,res)=>{
    try {
        const categorias = await Categoria.find()
         return res.json(categorias)
    } catch (error) {
        res.json(error)
    }

    
}

export const getcategoria: RequestHandler = async (req, res) => {
    try {
        // Esperamos a que se resuelva la promesa que devuelve findById
        const categoriaFound = await Categoria.findById(req.params.id);
        
        // Si no se encuentra la categoría, devolvemos un estado 204 (No Content)
        if (!categoriaFound) return res.status(204).json();
        
        // Si la categoría se encontró, la devolvemos en la respuesta
        return res.json(categoriaFound);
    } catch (error) {
        // Si hay un error, devolvemos un estado 500 (Internal Server Error) y el mensaje de error
        return res.status(500).json(error);
    }
}

export const deletecategorias:RequestHandler  = async(req,res)=>{

    try {
        
        const categoriaFound = await Categoria.findByIdAndDelete(req.params.id)
        if(!categoriaFound) return res.status(204).json()
   
           return res.json(categoriaFound)
    } catch (error) {
        return res.status(500).json(500)
    }
  

}

export const updatecategorias:RequestHandler  =async(req,res)=>{
    try {
        
        const categoriaUpdate = await Categoria.findByIdAndUpdate(req.params.id,req.body,{new:true})
        if(!categoriaUpdate) return res.status(204).json()
   
           return res.json(categoriaUpdate)
    } catch (error) {
        return res.status(500).json(500)
    }

}