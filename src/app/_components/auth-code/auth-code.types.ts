import { ComponentBaseType } from "../types/base-component.type";

export type AuthCodeProps =ComponentBaseType&{
    autoFocus ?: boolean;
    length ?: number;
    onChange :(value:string)=> void;
}
export type AuthInputProps ={
   min?:string;
   max?:string;
   pattern:string; 
}
export type AuthCodeRef ={
    focus:()=>void;
    clear:()=>void;
}