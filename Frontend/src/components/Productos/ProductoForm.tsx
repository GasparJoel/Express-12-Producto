import React, { ChangeEvent, useEffect, useState } from "react";
import { Categoria } from "../Categorias/Categoria";
import { getCategorias } from "../Categorias/CategoriasService";
import { Producto } from "./Producto";
import { useNavigate } from "react-router-dom";
import * as Productoservice from "./ProductoService";

export const ProductoForm = () => {
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [categorias, setCategorias] = useState<Categoria[]>([]);

  const navigate = useNavigate();

  const initialStates: Producto = {
    categoria: '',
    cod: '',
    descripcion: '',
    fotos: [],  // Arreglo de URLs de las fotos
    name: '',
    price_comp: 0,
    price_vent: 0,
    stock: 0,
    unid_med: '',
  };

  const [producto, setProducto] = useState<Producto>(initialStates);

  const LoadCategoria = async () => {
    const res = await getCategorias();
    setCategorias(res.data);
  };

  useEffect(() => {
    LoadCategoria();
  }, []);

  type InputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>;

  const HandleInputChange = (e: InputChange) => {
    setProducto({ ...producto, [e.target.name]: e.target.value });
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const files = Array.from(event.target.files);
      const newImages = files.map(file => URL.createObjectURL(file));
      
      setSelectedImages([...selectedImages, ...newImages]);
      setProducto({ ...producto, fotos: [...producto.fotos, ...newImages] }); // Añadir URLs al array de fotos
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    Productoservice.CreateProductos(producto)
    navigate('/productos')
  };

  return (
    <div className="row">
      <div className="col-md-8 offset-md-2">
        <div className="card">
          <div className="card-body">
            <h3>Create Producto</h3>
            <form onSubmit={handleSubmit}>
              <div className="col-md-12">
                <div className="row">
                  <div className="col-md-6">
                    <input
                      className="form-control mb-3"
                      type="text"
                      name="cod"
                      placeholder="Ingrese Codigo De Barras"
                      onChange={HandleInputChange}
                      autoFocus
                    />

                    <input
                      className="form-control mb-3"
                      placeholder="Nombre del producto"
                      type="text"
                      name="name"
                      onChange={HandleInputChange}
                    />
                    <textarea
                      className="form-control mb-3"
                      name="descripcion"
                      rows={3}
                      placeholder="Descripción del producto"
                      onChange={HandleInputChange}
                    ></textarea>
                    <input
                      className="form-control mb-3"
                      type="number"
                      min={0}
                      placeholder="Ingrese el stock actual"
                      name="stock"
                      onChange={HandleInputChange}
                    />
                    <input
                      className="form-control mb-3"
                      type="number"
                      min={0}
                      placeholder="Precio de compra"
                      name="price_comp"
                      onChange={HandleInputChange}
                    />
                    <input
                      className="form-control mb-3"
                      type="number"
                      min={0}
                      placeholder="Precio de venta"
                      name="price_vent"
                      onChange={HandleInputChange}
                    />
                    <select
                      className="form-control mb-3"
                      name="unid_med"
                      onChange={HandleInputChange}
                    >
                      <option value="">---Seleccione---</option>
                      <option value="Unidades">Unidades</option>
                      <option value="Kilogramos">Kilogramos</option>
                      <option value="Paquete">Paquete</option>
                    </select>
                  </div>
                  <div className="col-md-6">
                    <input
                      type="file"
                      name="fotos"
                      accept="image/*"
                      multiple
                      onChange={handleImageChange}
                      className="form-control mb-3"
                    />
                    {selectedImages.length > 0 && (
                      <div className="image-preview mt-3">
                        {selectedImages.map((img, index) => (
                          <img
                            key={index}
                            src={img}
                            alt={`Preview ${index}`}
                            style={{ maxWidth: "100%", height: "auto", marginBottom: "10px" }}
                          />
                        ))}
                      </div>
                    )}
                    <select
                      className="form-control"
                      name="categoria"
                      onChange={HandleInputChange}
                    >
                      <option value="">---Seleccione---</option>
                      {categorias.map((categoria) => (
                        <option key={categoria._id} value={categoria._id}>
                          {categoria.nombre}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="row">
                    
                    <div className="col-md-6 d-flex justify-content-center">
                      <button type="reset" className="btn btn-info">
                        Cancelar
                      </button>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center">
                      <button type="submit" className="btn btn-primary">
                        Create Product
                      </button>
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
