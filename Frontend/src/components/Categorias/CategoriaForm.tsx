import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Categoria } from "./Categoria";
import * as categoriaService from "./CategoriasService";
import { toast } from "react-toastify";
import { useParams ,useNavigate } from "react-router-dom";


//Interface para los params 

export const CategoriaForm = () => {

  const navigate = useNavigate()
  //Para ver los parametros que estan llegando por la url
  const params = useParams()
  

  const initialstate={
    nombre:'',
   
  }

  const [categoria, setCategoria] = useState<Categoria>(initialstate)
  //Capturamos los input 
  const HandleInputChange=(e:ChangeEvent<HTMLInputElement>)=>{
    setCategoria({...categoria,[e.target.name]:e.target.value})
  }

  const HandleSubmit= async(e:FormEvent<HTMLFormElement>)=>{
      e.preventDefault();

     if (!params.id) {
      await categoriaService.CreateCategoria(categoria)
      toast.success('New category create')
      setCategoria(initialstate)
     }else{
      await categoriaService.updateCategoria(params.id , categoria)
      navigate('/')
     }


   
  }

  useEffect(() => {

    const getCateogoria= async (id:string)=>{
      const res = await categoriaService.getCategoria(id);
      const {nombre } = res.data
      setCategoria({nombre})
    }

     if (params.id) {
      getCateogoria(params.id)
     }
  }, [])
  

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
        
               {
                params.id? 
                <button className="btn btn-xxl btn-info " >Update Category</button>
                :
                <button className="btn btn-xxl btn-primary " >Create Category</button>
               }

            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
