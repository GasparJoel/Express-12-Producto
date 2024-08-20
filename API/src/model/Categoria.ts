import { Schema,model } from "mongoose";


const CategoriaSchema= new Schema({
    nombre:{
        type:String,
        required:true,
        trim:true
    }
},{
    versionKey:false,
    timestamps:true,

})

const Categoria = model('Categoria',CategoriaSchema)
export default Categoria