import  config  from './config';
import express from 'express'    
import cors from 'cors'
import morgan from 'morgan';

//Importando rutas
import CategoriaRoutes from './routes/categoria/categoria.routes'

const app = express();
//Middleware
app.set('port',config.PORT)
app.use(morgan('dev'))
app.use(cors())

//para recepcionar los obj json 
 app.use(express.json())
//

//Uso de las rutas
app.use(CategoriaRoutes)

export default app;