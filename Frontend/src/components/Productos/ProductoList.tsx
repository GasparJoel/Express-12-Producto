import React, { useEffect, useState } from "react";
import { getProductos } from "./ProductoService";
import { Producto } from "./Producto";
import { ProductoItem } from "./ProductoItem";
import  ReactPlayer  from "react-player";



export const ProductoList = () => {
  const [Productos, setProductos] = useState<Producto[]>([])
  

  const LoadProductos =async()=>{
    const res  =await getProductos();

    const formatedFecha=res.data.map(producto=>{
      return{
        ...producto,
        createdAt:producto.createdAt?new Date(producto.createdAt):new Date(),
        updatedAt:producto.updatedAt?new Date(producto.updatedAt):new Date(),
      }

    })
    .sort((a,b)=>b.createdAt.getTime() - a.createdAt.getTime())
    
    setProductos(formatedFecha)
  }
   
  useEffect(() => {
   LoadProductos()
  }, [])
  

  return (

    <>
    <div className="container">
      <div className="row">
        <div className="card card-body">
          <div className="embed-responsive embed-responsive-16by9">
            <ReactPlayer 
            url = 'https://www.youtube.com/watch?v=wOLo-B7mrZM&t=3933s'
            width={'100%'}
            
            />
          </div>
     
          
        </div>
      </div>
    </div>

      <div className="row">
          {Productos.map(producto=>(
               <ProductoItem key={producto._id} producto={producto} loadCategoria = {LoadProductos}/>
          ))}
      </div>
    
    
    </>


  
  );
};
