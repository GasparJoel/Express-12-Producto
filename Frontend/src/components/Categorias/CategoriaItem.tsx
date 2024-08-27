import React from 'react'
import { Categoria } from './Categoria'

interface Props {
    categoria :Categoria
}
export const CategoriaItem = ({categoria}:Props) => {
  return (
    <div key={categoria._id}>
        <h1>{categoria.nombre} </h1>
        <h5>{categoria.createdAt}</h5>
    </div>
  )
}
