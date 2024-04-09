import { IconStar } from "../icons/icons"
import { Size } from "../types/size.type"
import { RatingProps } from "./rating.types"
const sizeClass:Record<Size,number>={
tiny:14,
small:18,
normal:24,
large:30
}
export const Rating:React.FC<RatingProps>=({
    rate,
    size='normal',
    className,
    variant='warning'
})=>{
    return(
        <div className={`flex gap-1 ${className}`}>
            {
                [1,2,3,4,5].map((num)=>{
                    return(
                        <IconStar
                            key={`start-${num}`}
                            width={sizeClass[size]}
                            height={sizeClass[size]}
                            fill={rate >=num ? `var(--color-${variant})` :''}
                            color={rate >=num ? `var(--color-${variant})` :'currentColor'}
                        />
                    )
                })
            }
        </div>
    )
}