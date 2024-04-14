import { readData } from "@/core/http-service/http-serveice";
import { CourseCommentsList } from "../_types/course-comments";
import { useQuery } from "@tanstack/react-query";

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
  const {data}=  useQuery({
        queryKey:['courseComments'],
        queryFn:()=>getComments({params}),
        gcTime:1000*60*60*6,
        staleTime:1000*60*60*5,
    })
    return {data}
}