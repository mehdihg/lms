import { ComponentBaseType } from "../types/base-component.type"

export type RatingProps=Omit<ComponentBaseType,'isDisabled'> &{
    rate:number;
}