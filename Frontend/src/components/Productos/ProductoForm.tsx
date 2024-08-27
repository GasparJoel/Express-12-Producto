import React, { useEffect, useState } from "react";
import { Categoria } from "../Categorias/Categoria";
import { getCategorias } from "../Categorias/CategoriasService";
export const ProductoForm = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [Categorias, setCategorias] = useState<Categoria[]>([])

   const LoadCategoria=async()=>{
      const res =   await getCategorias()
      setCategorias(res.data)
   }
   
   useEffect(() => {
     LoadCategoria()
   }, [])
   

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

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
                    <select className="form-control" name="unid_medida" id="">
                        <option value="">---Seleccione---</option>
                        <option value="Unidades">Unidades</option>
                        <option value="Kilogramos">Kilogramos</option>
                        <option value="Paquete">Paquete</option>
                    </select>
                  </div>
                  <div className="col-md-6">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="form-control mb-3"
                    />
                    {selectedImage && (
                      <div className="image-preview mt-3">
                        <img
                          src={selectedImage}
                          alt="Preview"
                          style={{ maxWidth: "100%", height: "auto" }}
                        />
                      </div>
                    )}
                    <select className="form-control" name="categoria" id="">
                        {
                            Categorias.map(categoria =>(
                                <option key={categoria._id} value={categoria._id}> {categoria.nombre} </option>
                            ))
                        }

                    </select>

                  </div>
                  <div className="row">
                    <div className="col-md-6 d-flex justify-content-center">
                    <button type="submit" className="btn btn-primary ">Create Product</button>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center">
                    <button type="reset" className="btn btn-info">Cancelar</button>
                    </div>
                  </div>
                </div>
              </div>

              
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
