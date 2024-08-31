import axios  from "axios";
import  {Producto}  from "./Producto";

export const getProductos = async()=>{
   return  await axios.get('http://localhost:5000/productos')
    
}

export const CreateProductos = async(producto:Producto)=>{
   return  await axios.post('http://localhost:5000/productos',producto)
    
}