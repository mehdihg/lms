import { ComponentBaseType } from "../types/base-component.type";

export type AvatarProps=Omit<ComponentBaseType, 'isDisabled'> & {
    src?:string;
    alt?:string
}