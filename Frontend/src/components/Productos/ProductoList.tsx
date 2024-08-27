import React, { useEffect, useState } from "react";
import { getProductos } from "./ProductoService";
import { Producto } from "./Producto";
import { ProductoItem } from "./ProductoItem";


export const ProductoList = () => {
  const [Productos, setProductos] = useState<Producto[]>([])
  

  const LoadProductos =async()=>{
    const res  =await getProductos();
    setProductos(res.data)

  }
   
  useEffect(() => {
   LoadProductos()
  }, [])
  

  return (

    <>
      <div className="container p-4">
          {Productos.map(producto=>(
               <ProductoItem key={producto._id} producto={producto}/>
          ))}
      </div>
    
    
    </>


  
  );
};
