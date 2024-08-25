import { RequestHandler } from "express";
import  Producto  from "../../model/Producto";

export const getProductos :RequestHandler=async(req,res)=>{
    res.send('obteniendo los productos')
}

export const getProducto : RequestHandler = async(req,res)=>{
    res.send('obteniendo un  producto')
}

export const CreateProducto :RequestHandler = async(req,res)=>{
    res.send('creando un  producto')
}

export const UpdateProducto :RequestHandler = async(req,res)=>{
    res.send('Actualizando un  producto')
}
export const deleteProducto :RequestHandler = async(req,res)=>{
    res.send('Eliminando un  producto')
}