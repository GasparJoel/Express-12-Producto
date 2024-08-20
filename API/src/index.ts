import { json } from "stream/consumers";
import  app  from "./app";
import './database'

app.get('/',(req,res)=>{
    res.send('Bienvenido')
})

app.get('/productos',(req,res)=>{
    res.send('Todos los productos')
})

app.get('/ListProducto',(req,res)=>{
    res.json({Message : "Hola Bienvenido"})
})
 
app.listen(app.get('port') , ()=>{
    console.log('Server on Port',app.get('port'))
})