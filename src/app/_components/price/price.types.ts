import { ComponentBaseType } from "../types/base-component.type";

export type PriceTypes = Omit<ComponentBaseType, 'isDisabled' | 'variant'> & {
    price?: number;
    text?: string;
}