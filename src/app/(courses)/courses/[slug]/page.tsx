import { Progress } from "@/app/_components/progress"
import { Rating } from "@/app/_components/rating"
import { API_URL } from "@/configs/global"
import { CourseDetails } from "@/types/course-interface-details.interface"
import { CourseAside } from "./_components/course-aside"
import { Tabs } from "@/app/_components/tab/tab"
import { Tab } from "@/types/tab.types"
import { AccordionTypes } from "@/types/accordion.types"
import { Accordion } from "@/app/_components/accordion"
import { CourseComments } from "./_components/comments/course-comments"
import { CurriculumProps } from "./_components/curriculum/curriculum.types"
import { CourseCurriculum } from "./_components/curriculum"
import { CourseChapter } from "@/types/course-chapter.interface"
import { VideoPlayer } from "@/app/_components/video-player"
import Image from "next/image"

export async function generateStaticParams(){
    const posts= await fetch(`${API_URL}/courses/slugs`).then(res=>res.json())
    return (posts as string[]).map((slug)=>{
        return{
            slug:slug
        }
    })
}

async function getNewCourses(slug:string):Promise<CourseDetails>{
const res = await fetch(`${API_URL}/courses/${slug}`)
return res.json()
}
async function getCurriculum(slug:string):Promise<CourseChapter[]>{
    const res = await fetch(`${API_URL}/courses/${slug}/curriculum`)
    return res.json()
}
export default async function({params}:{params:{slug:string}}){
    const {slug}=params
    const courseData=  getNewCourses(slug)
    const allCurriculumData =getCurriculum(slug)
    const [course,allCurriculum]= await Promise.all([courseData,allCurriculumData])
    const faqs: AccordionTypes[] = course.frequentlyAskedQuestions.map(
        faq => ({
            id: faq.id,
            title: faq.question,
            content: faq.answer
        })
    )
  
  
    const tabs:Tab[]=[
        {
            label:'مشخصات دوره',
            content:course.description
    
        },
        {
            label:'سوالات',
            content:<Accordion data={faqs}/>
    
        },
        {
            label:'نظرات',            
            content:<CourseComments/>
        }

    ]
    return(
        <div className="container grid grid-cols-10 grid-rows-[1fr 1fr] gap-10 py-10">
            <div className="bg-primary pointer-events-none absolute right-0 aspect-square w-1/2   rounded-full opacity-10 blur-3xl"></div>
            <div className="col-span-10 xl:col-span-7">
                <h1 className="text-center xl:text-right text-2xl lg:text-3xl xl:text-4xl font-black leading-10">
                    {course.title}
                </h1>
                <h2 className="mt-4 text-center xl:text-right text-lg  leading-9">
                    {course.subTitle}
                </h2>

                <div className=" mt-5">
                    {
                        course.videoUrl ?
                        <VideoPlayer
                        src={course.videoUrl}
                        poster={`${API_URL}/picture/${course.coverImageId}`}
                    />
                    :
                    <Image
                    src={`${API_URL}/picture/${course.coverImageId}`}
                    alt={course.title}
                    width='550'
                    height='327'
                    className="w-full"
                    />
                    }
                    
                </div>
            </div>
            <div className="col-span-10 xl:col-span-3">
                <CourseAside {...course}/>
            </div>
            <div className="col-span-10 xl:col-span-6 ">
                <Tabs tabs={tabs}/>
            </div>
            <div className="col-span-10 xl:col-span-4">
                <div className="sticky top-10">
                    <h2 className="mb-5 text-xl">سرفصل ها دوره</h2>
                    <CourseCurriculum data={allCurriculum}/>
                </div>
                
            </div>
        </div>
    )
}