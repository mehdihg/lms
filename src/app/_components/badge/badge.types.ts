import { ReactNode } from "react";
import { ComponentBaseType } from "../types/base-component.type";

export type BadgeType=Omit<ComponentBaseType , 'isDisabled'>  & {
children : ReactNode
}