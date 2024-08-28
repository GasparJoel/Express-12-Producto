import React, { ChangeEvent, FormEvent, useState } from "react";
import { Categoria } from "./Categoria";
import * as categoriaService from "./CategoriasService";
import { toast } from "react-toastify";
//import { useNavigate } from "react-router-dom";

export const CategoriaForm = () => {

  //const navigate = useNavigate()

  const initialstate={
    nombre:''
  }

  const [categoria, setCategoria] = useState<Categoria>(initialstate)
  //Capturamos los input 
  const HandleInputChange=(e:ChangeEvent<HTMLInputElement>)=>{
    setCategoria({...categoria,[e.target.name]:e.target.value})
  }

  const HandleSubmit= async(e:FormEvent<HTMLFormElement>)=>{
      e.preventDefault();
    await categoriaService.CreateCategoria(categoria)
     toast.success('New category create')
     setCategoria(initialstate)
    // navigate('/')
  }

  return (
    <div className="row">
      <div className="col-md-4 offset-md-4">
        <div className="card">
          <div className="card-body">
            <h3>New Categoria</h3>

            <form onSubmit={HandleSubmit}>
             
                <input
                  className="form-control mb-4"
                  type="text"
                  name="nombre"
                  placeholder="Ingrese el nombre"
                  autoFocus
                  onChange={HandleInputChange}
                  value={categoria.nombre}
                />
        
                <button className="btn btn-xxl btn-primary " >Create Category</button>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
