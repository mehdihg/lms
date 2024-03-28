import { ComponentBaseType } from "../types/base-component.type";

export type LoadingProps= Omit<ComponentBaseType , 'isDisabled'> &{
    type?: "spinner" | "ring"
}