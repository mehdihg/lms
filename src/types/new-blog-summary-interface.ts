export interface NewBlogSummary{
    title: string;
    slug: string;
    postDate: string;
    thumbnailUrl: string;
    studyTime: number;
    isNew: boolean;
    numberOfViews: number;
    author: string | null;
    numberOfComments: number
}