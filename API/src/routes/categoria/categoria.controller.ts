//Esto es para que entiendan el req y res el archivo 
import { RequestHandler } from "express";
import  Categoria  from "../../model/Categoria";

export const createcategorias:RequestHandler  = async(req,res)=>{
    
    const newcategoria = new Categoria(req.body)
    const saveCategoria = await newcategoria.save() 

    res.json(saveCategoria)
    console.log('Categoria Guardado')

}

export const getcategorias:RequestHandler  =async(req,res)=>{
     try {
        const categorias =  await Categoria.find()
        return res.json(categorias)
     } catch (error) {
        res.json(error)
     }
   
    
}

export const getcategoria: RequestHandler = async (req, res) => {

   try {
      const categoriafound = await Categoria.findById(req.params.id);
  

    if (!categoriafound) return res.status(204).json({message:"No encontrado"}) 
   
    return res.json(categoriafound)

   } catch (error) {
      return res.status(500).json(error)
   }

   
}

export const deletecategorias:RequestHandler  = async(req,res)=>{

   try {
      const categoriaFound = await Categoria.findByIdAndDelete(req.params.id)

      if(!categoriaFound) return res.status(204).json({message:"No encontrado"})
      return res.json(categoriaFound)
   } catch (error) {
      res.status(500).json(error)
   }
   
   
}

export const updatecategorias:RequestHandler  =async(req,res)=>{
   try {
       const categoriaUpdate = await Categoria.findByIdAndUpdate(req.params.id,req.body,{new:true})
       if (!categoriaUpdate) return res.status(204).json({message:"No encontrado"})
         return res.json(categoriaUpdate)

   } catch (error) {
      res.status(500).json(error)
   }

}


