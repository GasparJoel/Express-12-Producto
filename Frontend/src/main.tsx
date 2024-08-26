import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import './index.css'
import { CategoriaList } from './components/Categorias/CategoriaList';
import { CategoriaForm } from './components/Categorias/CategoriaForm';


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
