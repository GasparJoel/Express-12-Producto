import React, { useEffect } from "react";
import { Producto } from "./Producto";
import { useNavigate } from "react-router-dom";
import  * as productoService  from "./ProductoService";

interface Props {
  producto: Producto;
  loadCategoria:()=> void ;
}

export const ProductoItem = ({ producto ,loadCategoria }: Props ) => {
  const navigate = useNavigate()

 const HandleDeleteProducto =async (id:string)=>{
   await productoService.deleteProducto(id)
  loadCategoria()
 }

  useEffect(() => {
   
  }, []);

  return (
    <div className="col-md-4">
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={producto.fotos.length > 0 ? producto.fotos[0] : "placeholder-image-url.jpg"}
          className="card-img-top"
          alt={producto.name}
        />
        <div className="card-body">
          <h5 className="card-title">{producto.name}</h5>
          <p className="card-text">{producto.descripcion}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            Precio Compra : S/ {producto.price_comp}
          </li>
          <li className="list-group-item">
            Precio Venta : S/ {producto.price_vent}
          </li>
          <li className="list-group-item">
            Stock : {producto.stock} {producto.unid_med}
          </li>
        </ul>
        <div className="card-body">
          <a href="#" className=" btn btn-info m-3" onClick={()=>navigate(`/updateProducto/${producto._id}`)}>
            Edit
          </a>
          <a href="#" className="btn btn-danger" onClick={()=>producto._id && HandleDeleteProducto(producto._id) }>
            Delete
          </a>
        </div>
      </div>
    </div>
  );
};
