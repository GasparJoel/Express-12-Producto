//Esto es para que entiendan el req y res el archivo 
import { RequestHandler } from "express";

export const getcategorias:RequestHandler  =(req,res)=>{
    res.json('Getinging Categorias')
}

export const createcategorias:RequestHandler  =(req,res)=>{
    res.json('create Categorias')
}

export const getcategoria:RequestHandler  =(req,res)=>{
    res.json('buscar una  Categoriaa')
}

export const deletecategorias:RequestHandler  =(req,res)=>{
    res.json('delete Categoria')

}

export const updatecategorias:RequestHandler  =(req,res)=>{
    res.json('Actualizar Categoria')

}