import { NewBlogSummary } from "@/types/new-blog-summary-interface"
import { BlogPostCard } from "./blog-post-card"

type BlogPostCardListProps={
    posts:NewBlogSummary[]
}

export const BlogPostCardList:React.FC<BlogPostCardListProps>=({posts})=>{
return(
    <div className="flex flex-wrap justify-center xl:justify-start gap-6 mt-10">
        {
            posts?.map((post)=>{
                return(
                    <BlogPostCard key={`blog-${post}`} {...post}/>
                )
            })
        }
    </div>

)
}