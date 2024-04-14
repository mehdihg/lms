'use client'
import { useParams } from "next/navigation"
import { useComments } from "../../_api/get-comments"
import { SingleComment } from "@/app/_components/comment"



export const CourseComments=()=>{
    const {slug} = useParams()
   const {data:comments}= useComments({
        params:{
            slug:slug as string,
            page:1
        }
    })
    
    
    return(
        <>
            {
                comments?.data.map((comment)=>{
                    return(
                        <SingleComment key={comment.id} variant='info' {...comment}/>
                    )
                })
            }
        </>
    )
}