import { Badge } from "@/app/_components/badge"
import { NewCouresesSummary } from "@/types/new-courses-summary-interface"
import Image from "next/image"
import Link from "next/link"
type CourseCardType=NewCouresesSummary

export const CourseCard:React.FC<CourseCardType>=({
    coverImageId,
    title,
    duration,
    level,
    levelNumber,
    slug,
    subTitle,
    recordStatus,
    basePrice
})=>{
    return(
        <div className="card"> 
            <figure>
                <Image
                    src={`https://api.classbon.com/api/picture/${coverImageId}`}
                    alt={title}
                    width={550}
                    height={327}
                />
            </figure>
            <div className="flex mt-2 gap-2 font-semibold dark:text-info px-3 py-2">
                <Badge variant="info">
                {
                    recordStatus
                }
                </Badge>
                <Badge variant="success">
                {
                    level
                }
                </Badge>
               
            </div>
            <div className="card-body">
                <Link href={`/course/${slug}`}>{title}</Link>
                <p >{subTitle}</p>
                <div>
                <Badge variant="warning">
                {duration}
                </Badge>
                    
                    {
                        basePrice
                    }
                </div>
            </div>
        </div>
    )
}