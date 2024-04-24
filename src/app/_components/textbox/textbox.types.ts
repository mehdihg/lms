import { InputHTMLAttributes } from "react"
import { ComponentBaseType } from "../types/base-component.type"

type TextBoxType = "text" | "number" | "email" | "password"

export type TextBoxProps= Omit<InputHTMLAttributes<HTMLInputElement>,'size'>  & ComponentBaseType  &{
    type?:TextBoxType
}