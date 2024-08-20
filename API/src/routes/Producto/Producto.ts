import {Schema,model} from 'mongoose';

new Schema({
    cod:{
        type: String,
        required:true,
        trim:true
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
        type:true,
        required:true,
        trim:true
    },
    unid_med:{
        type:String,
        required:true,
        trim:true
    }
    
})