import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import './index.css'
import { CategoriaList } from './components/Categorias/CategoriaList';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<CategoriaList/>} />
     </Routes>
    </BrowserRouter>
  </StrictMode>,
)
