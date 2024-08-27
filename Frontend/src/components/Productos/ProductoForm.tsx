import React from "react";

export const ProductoForm = () => {
  return (
    <div className="row">
      <div className="col-md-8 offset-md-2">
        <div className="card">
          <div className="card-body">
            <h3>Create Producto</h3>
            <form action="">
              <div className="col-md-12">
                <div className="row">
                  <div className="col-md-6">
                    <input
                      className="form-control mb-3"
                      type="text"
                      name="cod"
                      placeholder="Ingrese Codigo De Barras"
                      id=""
                      autoFocus
                    />

                    <input
                      className="form-control mb-3"
                      placeholder="Nombre del producto"
                      type="text"
                      name="name"
                      id=""
                    />
                    <textarea
                      className="form-control mb-3"
                      name="descripcion"
                      rows={3}
                      placeholder="Descripción del producto"
                      id=""
                    ></textarea>
                    <input
                      className="form-control mb-3"
                      type="number"
                      min={0}
                      placeholder="Ingrese el stock actual"
                      name="stock"
                      id=""
                    />
                    <input
                      className="form-control mb-3"
                      type="number"
                      min={0}
                      placeholder=" precio de compra"
                      name="precio_comp"
                      id=""
                    />
                    <input
                      className="form-control mb-3"
                      type="number"
                      min={0}
                      placeholder="precio de venta"
                      name="precio_vent"
                      id=""
                    />
                  </div>
                  <div className="col-md-6">


                  </div>
                </div>
              </div>

              <select className="form-control" name="unid_medida" id="">
                <option value="">---Seleccione---</option>
                <option value="Unidades">Unidades</option>
                <option value="Kilogramos">Kilogramos</option>
                <option value="Paquete">Paquete</option>
              </select>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
