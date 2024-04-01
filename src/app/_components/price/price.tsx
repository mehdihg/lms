import { Badge } from "../badge";
import { IconToman } from "../icons/icons";
import { Size } from "../types/size.type";
import { PriceTypes } from "./price.types";

const sizeClases:Record<Size,{textSize:string,svgSize:number}> ={
    tiny:{textSize:'text-xs',svgSize:16},
    small:{textSize:'text-sm',svgSize:18},
    normal:{textSize:'text-md',svgSize:20},
    large:{textSize:'text-lg',svgSize:22},
}

export const Price:React.FC<PriceTypes>=({
    size='normal',
    text='رایگان',
    price,
    className
})=>{
return(
    <>
        {
            price != null && price > 0 ?(
                <span className={`flex items-center font-bold gap-1 dark:text-white/90 ${sizeClases[size].textSize} ${className}`}>
                    {
                        price.toLocaleString()
                    }
                    <IconToman strokeWidth={1} viewBox="0 0 16 16" width={sizeClases[size].svgSize} height={sizeClases[size].svgSize}/>
                </span>
            ) :(
                <Badge variant="success" size="normal">
                    {text}
                </Badge>
            )
        }
    </>
)
}