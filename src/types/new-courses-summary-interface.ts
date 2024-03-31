import { CourseLevel } from "@/enums/new-course-summary-enum"


export interface NewCouresesSummary {
    "id": number,
    "title": string,
    "courseCategoryId": number,
    "duration": string,
    "level": string,
    "levelNumber": CourseLevel,
    "averageReviewRating": number,
    "numOfReviews": number,
    "coverImageId": number,
    "recordStatus": string,
    "slug": string,
    "subTitle": string,
    "isFree": boolean,
    "basePrice": number
}