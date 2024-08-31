import React from 'react'
import { Categoria } from './Categoria'
import "./CategoriaItem.css"
import { useNavigate } from "react-router-dom";
import * as categoriaService from './CategoriasService'

interface Props {
    categoria :Categoria;
    loadCategorias:()=>void;
}
export const CategoriaItem = ({categoria,loadCategorias}:Props) => {
  const navigate = useNavigate()

  const HandleDelete=async(id:string)=>{
   await categoriaService.DeleteCategoria(id)
    loadCategorias()
  }  

  return (
    <div  className='col-md-4'>
       <div className="card card-body categoria-card" >
          <div className="d-flex justify-content-between">
            <h1 onClick={()=> navigate(`/update/${categoria._id}`)} >{categoria.nombre} </h1>
            <span className='text-danger pulsor-delete' onClick={()=> categoria._id &&  HandleDelete(categoria._id)}>X</span>
          </div>
        
       </div>
    </div>
  )
}
