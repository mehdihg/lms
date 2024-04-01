import classNames from "classnames";
import { BadgeType } from "./badge.types";
import { Size } from "../types/size.type";

export const Badge:React.FC<BadgeType>=({variant,className,size='normal',children})=>{
    const SizeClasses:Record<Size,string> ={
        tiny:'badge-xs',
        small:'badge-sm',
        normal:'badge-md',
        large:'badge-lg'
        
    }
    const classes = classNames(
        'badge',
        className,
        {[`badge-${variant}`]:variant},
        {[SizeClasses[size]]:size}
    )
    return(
        <span className={classes} data-testid='badge'>{children}</span>
    )
}