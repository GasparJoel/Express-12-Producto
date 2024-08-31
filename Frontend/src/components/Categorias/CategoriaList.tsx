import React, { useEffect, useState } from 'react'

//Creamos una interface para poder traer los datos de categoria
import { Categoria } from "./Categoria";
import { getCategorias } from "./CategoriasService";
import {CategoriaItem} from "./CategoriaItem";


export const CategoriaList = () => {

    const [categorias, setcategorias] = useState<Categoria[]>([])

    const LoadCategorias =async()=>{
        const res  = await getCategorias()

        //Actualizamos las fechas en tipos de datos Date y ordenar por orden de registro

       const formatedFechCategoria= res.data.map(categoria=>{
            return{
                ...categoria,
                createdAt:categoria.createdAt?new Date(categoria.createdAt):new Date(),
                updatedAt:categoria.updatedAt?new Date(categoria.updatedAt):new Date()
            }
        })
        .sort((a,b)=>b.createdAt.getTime() - a.createdAt.getTime())
        setcategorias(formatedFechCategoria)

    }

    useEffect(() => {
       LoadCategorias()
    }, [])
    
  return (

      <div className="row">
          {
              categorias.map((categoria)=>(
                  <CategoriaItem key={categoria._id} categoria={categoria} loadCategorias ={LoadCategorias}/>
              ))
          }
       </div>
 

  )
}
