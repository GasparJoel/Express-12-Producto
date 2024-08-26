import React, { useEffect, useState } from 'react'

//Creamos una interface para poder traer los datos de categoria
import { Categoria } from "./Categoria";
import { getCategorias } from "./CategoriasService";



export const CategoriaList = () => {

    const [categorias, setcategorias] = useState<Categoria[]>([])

    const LoadCategorias =async()=>{
        const res  = await getCategorias()
        setcategorias(res.data)
    }

    useEffect(() => {
       LoadCategorias()
    }, [])
    
  return (

    <>
      <table>
        <thead>
            <th>Cod</th>
            <th>Nombre</th>
            <th>Fecha</th>
        </thead>
        <tbody>
            {
                categorias.map(categorias=>(
                    <tr key={categorias._id}>
                        <td>{categorias._id}</td>
                        <td> {categorias.nombre} </td>
                        <td>{categorias.createdAt} </td>
                    </tr>
                ))
            }
           
           
            
        </tbody>
      </table>
        {
            categorias.map((categoria)=>(
                <div key={categoria._id}>
                    <h1>{categoria.nombre} </h1>
                    <h5>{categoria.createdAt}</h5>
                </div>
            ))
        }
      
    </>

  )
}
