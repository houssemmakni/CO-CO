import { Category } from "./enumerations/Category";
import { FileHandle } from "./file_handle.model";

export interface Product{
  idProduct:number;
  reference:string;
  adresse:string;
  numero:number;
  name:string;
  quantity:number;
  price:number;
  description:string;
  brand:string;
  imageModels:FileHandle[];
  }