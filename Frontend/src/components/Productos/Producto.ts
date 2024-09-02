export interface Producto {
    categoria: string;
    cod: string;
    createdAt?: string | Date;
    descripcion: string;
    fotos: string[]; // Arreglo de URLs de las fotos
    name: string;
    price_comp: number;
    price_vent: number;
    stock: number;
    unid_med: string;
    updatedAt?: string|Date;
    _id?: string; 
  }