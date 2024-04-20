'use client'
import { useParams } from "next/navigation"
import { useComments } from "../../_api/get-comments"
import { SingleComment } from "@/app/_components/comment"
import { TextPlaceholder } from "@/app/_components/placeholders"
import { Fragment, useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { Button } from "@/app/_components/button"
import { IconRefresh } from "@/app/_components/icons/icons"
import { Alert } from "@/app/_components/alert"



export const CourseComments=()=>{
    const {slug} = useParams()
   const {data:comments, refetch,isFetchingNextPage,error,hasNextPage,fetchNextPage,isFetching}= useComments({
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
    if(error){
        return(
            <>
            <Alert variant="error">خطا در برقراری ارتباط!</Alert>
                <Button variant="neutral" className="font-semibold" isOutline={true} shape="wide" onClick={()=>refetch()}>
                    <IconRefresh/>
                    تلاش مجدد
                </Button>
            </>
        )
    }
    return(
        <>
            {
                comments?.pages?.map((currentPage)=>{
                    return(
                        <Fragment key={`comment-page-${currentPage?.data}`}>
                            {
                                currentPage?.data.map((comment)=>{
                                    return(
                                        <SingleComment key={comment?.id} variant='info' {...comment}/>
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
                (isFetching || hasNextPage) && <div ref ={ref}>
                <TextPlaceholder/>
            </div>
            }
            
            
        </>
    )
}