import { colord } from "colord"
import { tailwindColor } from "../../../../tailwind.config"
const getTextColor =(input:string):string=>{
return colord(input).isDark() ? 'white':'black'
}
export  const Colors=()=>{
    return(
        <div className="flex flex-wrap justify-center" lang="en" dir="ltr">
            {
                Object.entries(tailwindColor).map(([name,color])=>{
                    return <ColorBox key={name} names={name} color={color}/>
                })
            }
        </div>
    )
}
const ColorBox:React.FC<{names:string,color:string}> =({names ,color})=>{
    return(
        <div className="w-96 h-60 flex flex-col items-center justify-center uppercase text-center" style={{backgroundColor:color,color:getTextColor(color)}}>
            <span>{names}</span>
            <span>{color}</span>
        </div>
    )
}