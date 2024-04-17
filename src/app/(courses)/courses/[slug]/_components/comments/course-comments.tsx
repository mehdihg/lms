'use client'
import { useParams } from "next/navigation"
import { useComments } from "../../_api/get-comments"
import { SingleComment } from "@/app/_components/comment"
import { TextPlaceholder } from "@/app/_components/placeholders"
import { Fragment, useEffect } from "react"
import { useInView } from "react-intersection-observer"



export const CourseComments=()=>{
    const {slug} = useParams()
   const {data:comments, refetch,isFetchingNextPage,error,hasNextPage,fetchNextPage}= useComments({
        params:{
            slug:slug as string,
            page:1
        }
    })
    const {ref,inView}=useInView({

    })
    useEffect(()=>{
        if(hasNextPage &&inView){
            fetchNextPage()
        }
    },[hasNextPage,inView,fetchNextPage])
    
    return(
        <>
            {
                comments?.pages?.map((currentPage)=>{
                    return(
                        <Fragment key={`comment-page-${currentPage}`}>
                            {
                                currentPage?.data.map((comment)=>{
                                    return(
                                        <SingleComment key={comment.id} variant='info' {...comment}/>
                                    )
                                })
                            }
                        </Fragment>
                        
                    )
                })
            }
            {

            }
            {
                (isFetchingNextPage || hasNextPage) && <div ref ={ref}>
                <TextPlaceholder/>
            </div>
            }
            
            
        </>
    )
}