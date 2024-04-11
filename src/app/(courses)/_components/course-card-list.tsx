import { NewCouresesSummary } from "@/types/new-courses-summary.interface";
import { CourseCard } from "./course-card";

 type CourseCardList ={
   courses: NewCouresesSummary[]
}
export const CourseCardList:React.FC<CourseCardList>=({courses}:CourseCardList)=>{
    return(
        <div className="flex flex-wrap justify-center xl:justify-start gap-6 mt-10">
            {
                courses?.map((course)=>{
                    return(
                        <CourseCard key={course.id} {...course}/>
                    )
                })
            }
        </div>
    )
}