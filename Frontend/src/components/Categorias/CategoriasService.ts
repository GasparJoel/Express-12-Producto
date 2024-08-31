import axios  from "axios";
import { Categoria } from "./Categoria";

const API = 'http://localhost:5000'

export const getCategorias = async()=>{
   return  await axios.get<Categoria[]>(`${API}/categorias`)
    
}

export const CreateCategoria = async(categoria:Categoria)=>{
   return  await axios.post(`${API}/categorias`,categoria)  
}

export const getCategoria = async(id:string)=>{
   return  await axios.get<Categoria>(`${API}/categorias/${id}`)
    
}
export const updateCategoria = async(id:string , categoria:Categoria)=>{
   return  await axios.put<Categoria>(`${API}/categorias/${id}`, categoria )
    
}

export const DeleteCategoria = async(id:string)=>{
   return  await axios.delete(`${API}/categorias/${id}`)  
}