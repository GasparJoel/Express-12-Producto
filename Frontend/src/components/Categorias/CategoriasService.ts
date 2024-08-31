import axios  from "axios";
import { Categoria } from "./Categoria";

const API = 'http://localhost:5000'

export const getCategorias = async()=>{
   return  await axios.get<Categoria[]>(`${API}/categorias`)
    
}

export const CreateCategoria = async(categoria:Categoria)=>{
   return  await axios.post(`${API}/categorias`,categoria)  
}

export const DeleteCategoria = async(categoria:Categoria)=>{
   return  await axios.post(`${API}/categorias`,categoria)  
}