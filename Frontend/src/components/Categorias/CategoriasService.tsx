import axios  from "axios";

export const getCategorias = async()=>{
   return  await axios.get('http://localhost:5000/categorias')
    
}