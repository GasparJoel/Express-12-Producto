import  config  from './config';
import express from 'express'    
import cors from 'cors'
import morgan from 'morgan';

//Importando rutas
import CategoriaRoutes from './routes/categoria/categoria.routes'
import ProductosRoutes  from './routes/Producto/productos.routes'

const app = express();
//Middleware
app.set('port',config.PORT)
app.use(morgan('dev'))
app.use(cors())

//para recepcionar los obj json 
 app.use(express.json())
//para entender los campos cuando llegan desde el post 
app.use(express.urlencoded({extended:false}))

//Uso de las rutas
app.use(CategoriaRoutes)
app.use(ProductosRoutes)

export default app;