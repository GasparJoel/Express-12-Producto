import React from 'react'
import { Categoria } from './Categoria'
import "./CategoriaItem.css"
import { useNavigate } from "react-router-dom";
interface Props {
    categoria :Categoria
}
export const CategoriaItem = ({categoria}:Props) => {
  const navigate = useNavigate()

  return (
    <div  className='col-md-4'>
       <div className="card card-body categoria-card" onClick={()=> navigate(`/update/${categoria._id}`)}>
          <div className="d-flex justify-content-between">
            <h1>{categoria.nombre} </h1>
            <span className='text-danger'>X</span>
          </div>
        
       </div>
    </div>
  )
}
