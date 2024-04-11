interface Problem {
    title:string;
    status:number;
    detail?:string;
    errors?:Record<string,string[]>
}
export type ApiError = |BadRequestsError|ValidationError|UnauthorizedError|NotFoundError|UnhandledException
//400 error
interface BadRequestsError extends Problem{}
//403 error
interface UnauthorizedError extends Problem{}
//400 error
interface ValidationError extends Problem{}
//404 error
interface NotFoundError extends Problem{}
//500 error
interface UnhandledException extends Problem{}
interface NetworkError extends Problem{}

export type {Problem,BadRequestsError,UnauthorizedError,ValidationError,NotFoundError,UnhandledException,NetworkError}