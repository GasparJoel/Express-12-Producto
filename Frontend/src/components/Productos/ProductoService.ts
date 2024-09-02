import axios  from "axios";
import  {Producto}  from "./Producto";



const API = 'http://localhost:5000'

export const getProductos = async()=>{
   return  await axios.get<Producto[]>(`${API}/productos`)
    
}

export const getProducto = async(id:string)=>{
   return  await axios.get<Producto>(`${API}/productos/${id}`)
    
}

export const updateProducto = async(id:string,producto :Producto)=>{
   return  await axios.put<Producto>(`${API}/productos/${id}`,producto)
    
}

export const deleteProducto = async(id:string)=>{
   return  await axios.delete<Producto>(`${API}/productos/${id}`)
    
}

export const CreateProductos = async(producto:Producto)=>{
   return  await axios.post(`${API}/productos`,producto)
    
}