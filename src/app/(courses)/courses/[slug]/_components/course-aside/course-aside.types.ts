import { CourseDetails } from "@/types/course-interface-details.interface";

export type CourseAsideProps= Pick<CourseDetails,| "basePrice"
| "numberOfLectures"
| "numOfStudents"
| "duration"
| "recordStatus"
| "isDownloadable"
| "averageReviewRating"
| "level"
| "numOfReviews"
| "authorName"
| "authorSpecialty"
| "profileImageId"
| "levelNumber">