import { readData } from "@/core/http-service/http-serveice";
import { CourseCommentsList } from "../_types/course-comments";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

type GetCommentsProps ={
    params:{
        slug:string;
        page:number;

    }
}

const getComments =({params}:GetCommentsProps):Promise<CourseCommentsList>=>{
    const {slug,page}=params;
    const url =`/courses/${slug}/comments?page=${page}`
    return readData(url)
}

export const useComments=({params}:GetCommentsProps)=>{
  const {data , refetch,isFetchingNextPage,error,hasNextPage,fetchNextPage,isFetching}=  useInfiniteQuery({
        queryKey:['courseComments',params.slug],
        queryFn:({pageParam})=>getComments({params:{...params,page:pageParam}}),
        getNextPageParam:(lastPage)=>lastPage.nextPage,
        initialPageParam:1,
        gcTime:1000*60*60*6,
        staleTime:1000*60*60*5,
    })
    return {data,refetch,isFetchingNextPage,error,hasNextPage,fetchNextPage,isFetching}
}