import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CategoriaList } from "./components/Categorias/CategoriaList";
import { CategoriaForm } from "./components/Categorias/CategoriaForm";

import "./index.css";
import "bootswatch/dist/pulse/bootstrap.min.css";
import { Navbar } from "./components/Navbar/Navbar";
import { ProductoList } from "./components/Productos/ProductoList";
import { ProductoForm } from "./components/Productos/ProductoForm";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <div className="container p-4">
        <Routes>
          <Route path="/" element={<CategoriaList />} />
          <Route path="/New-categoria" element={<CategoriaForm />} />
          <Route path="/Productos" element = { <ProductoList/>  }/>
          <Route path="/New-productos" element = { <ProductoForm/>  }/>
        </Routes> 
      </div>
    </BrowserRouter>
  </StrictMode>
);
