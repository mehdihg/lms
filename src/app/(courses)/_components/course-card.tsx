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
                {
                    recordStatus
                }
                {
                    level
                }
            </div>
            <div className="crad-body">
                <Link href={`/course/${slug}`}>{title}</Link>
                <p>{subTitle}</p>
                <div>
                    {duration}
                    {
                        basePrice
                    }
                </div>
            </div>
        </div>
    )
}