import React from "react";
import { Producto } from "./Producto";
interface Props {
  producto: Producto;
}
export const ProductoItem = ({ producto }: Props) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src="..." className="card-img-top" alt="..." />
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
        <a href="#" className=" btn btn-info m-3">
          Edit 
        </a>
        <a href="#" className="btn btn-danger">
          Delete
        </a>
      </div>
    </div>
  );
};
