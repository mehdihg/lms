"use client"
import classNames from "classnames"
import { LoadingProps } from "./loading.type"
import { Size } from "../types/size.type";

const sizeClasses: Record<Size, string> = {
    tiny: "loading-xs",
    small: "loading-sm",
    normal: "loading-md",
    large: "loading-lg",
  };
export const Loading:React.FC<LoadingProps>=({
    type='spinner',
    className,
    variant,
    size="normal"
})=>{
    const classes =classNames(
        'loading',
        className,
        {[`loading-${type}`]:type},
        {[`loading-${variant}`]:variant},
        {[`${sizeClasses[size]}`]:size},
    )
    return(
        <span className={classes}></span>
    )
}