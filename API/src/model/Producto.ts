import {Schema,model} from 'mongoose';
import Categoria  from "./Categoria";

const ProductoSchema = new Schema({
    cod:{
        type: String,
        required:true,
        trim:true,
        unique:true
    }, 
    name :{
        type:String,
        required:true,
        trim:true
    },
    descripcion:{
        type:String,
        trim:true
    },
    stock :{
        type:Number,
        required:true,
        trim:true
    },
    price_comp:{
        type:Number,
        trim:true
    } ,
    price_vent :{
        type:Number,
        required:true,
        trim:true
    },
    unid_med:{
        type:String,
        required:true,
        trim:true
    },
    fotos: {
        type:[String],
        default:[]
    },
    categoria:{
        type:Schema.Types.ObjectId,
        ref:'Categoria',
        required:true
    }
    
},{
    versionKey:false,
    timestamps:true
})

const Producto = model('Producto',ProductoSchema)
export default Producto