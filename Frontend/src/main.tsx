import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import { CategoriaList } from './components/Categorias/CategoriaList';
import { CategoriaForm } from './components/Categorias/CategoriaForm';

import './index.css'
import 'bootswatch/dist/pulse/bootstrap.min.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<CategoriaList/>} />
      <Route path='/Categoria' element={<CategoriaForm/>} />
     </Routes>
    </BrowserRouter>
  </StrictMode>,
)
