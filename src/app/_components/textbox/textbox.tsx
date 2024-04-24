import classNames from "classnames"
import { Size } from "../types/size.type"
import { TextBoxProps } from "./textbox.types"
import { forwardRef } from "react"

const sizeClasses:Record<Size,string> = {
    tiny:"textbox-xs",
    small:"textbox-sm",
    normal:"textbox-md",
    large:"textbox-lg",
}
export const TextBox:React.FC<TextBoxProps>=forwardRef<HTMLInputElement,TextBoxProps>(({
    className,
    variant="ghost",
    type="text",
    size="normal",
    ...rest
},ref)=>{
    const classes = classNames(
        "textbox",
        'w-full',
        className,
        {[`textbox-${variant}`]:variant},
        {[`${sizeClasses[size]}`]:size}
    )
    return(
        <input ref={ref} type={type} className={classes} {...rest} />
    )
})