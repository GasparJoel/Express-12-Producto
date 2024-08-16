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
 
app.listen(3000 , ()=>{
    console.log("Server Activo 3000")
})