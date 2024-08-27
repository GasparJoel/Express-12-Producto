import React from "react";

export const CategoriaForm = () => {
  return (
    <div className="row">
      <div className="col-md-4 offset-md-4">
        <div className="card">
          <div className="card-body">
            <h3>New Categoria</h3>

            <form action="">
              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  name="nombre"
                  placeholder="Ingrese el nombre"
                  autoFocus
                />
              </div>
              <div className="form-group">
                <button className="btn btn-xxl btn-primary" >Create Category</button>
              </div>
              

            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
