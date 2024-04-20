import { ComponentBaseType } from "../types/base-component.type";

export type AlertProps=Omit<ComponentBaseType,'size'|'isDisabled'> &{
    showIcon?:boolean;
    children:React.ReactNode;
}