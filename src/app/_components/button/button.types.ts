import { ButtonHTMLAttributes } from "react";
import { ComponentBaseType } from "../types/base-component.type";
import { LoadingBehavior } from "../types/loading-behaviour";

export type ButtonProps=ButtonHTMLAttributes<HTMLButtonElement> & ComponentBaseType & LoadingBehavior &{
    isOutline?:boolean
    isLink?:boolean
    animatedIcon?:boolean
    shape?:Shape
}
export type Shape= 'default'| 'wide' | 'square' | 'full'