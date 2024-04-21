import { ComponentBaseType } from "../types/base-component.type";

export type ProgressProps= Omit<ComponentBaseType,'isDisabled'> &{
    value:number;

}