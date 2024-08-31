import React from 'react'
import { Categoria } from './Categoria'

interface Props {
    categoria :Categoria
}
export const CategoriaItem = ({categoria}:Props) => {
  return (
    <div  className='col-md-4'>
       <div className="card card-body">
          <div className="d-flex justify-content-between">
            <h1>{categoria.nombre} </h1>
            <span className='text-danger'>X</span>
          </div>
        
       </div>
    </div>
  )
}
