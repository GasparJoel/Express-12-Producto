import { RequestHandler } from "express";
import  Producto  from "../../model/Producto";

export const getProductos :RequestHandler=async(req,res)=>{

    try {
        const ProductoArray = await Producto.find()
        return res.json(ProductoArray)
    } catch (error) {
        res.status(500).json(error)
    }
    
}

export const getProducto : RequestHandler = async(req,res)=>{
    res.send('obteniendo un  producto')
}

export const CreateProducto :RequestHandler = async(req,res)=>{
     const newProducto = new Producto(req.body);
     const saveProducto = await newProducto.save()
     
     res.json(saveProducto)
     console.log("producto Guardado")
}

export const UpdateProducto :RequestHandler = async(req,res)=>{
    res.send('Actualizando un  producto')
}
export const deleteProducto :RequestHandler = async(req,res)=>{
    res.send('Eliminando un  producto')
}