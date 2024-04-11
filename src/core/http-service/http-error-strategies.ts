import { ApiError, BadRequestsError, NetworkError, NotFoundError, UnauthorizedError, UnhandledException, ValidationError } from "@/types/http-errors.interface";

export type ApiErrorStrategy =(errorData:ApiError)=>void

export const badRequestsErrorStrategy:ApiErrorStrategy=(errorData)=>{
    throw{
        ...errorData
    }as BadRequestsError
}
export const validationErrorStrategy:ApiErrorStrategy=(errorData)=>{
    throw{
        ...errorData
    }as ValidationError
}
export const notFoundErrorStrategy:ApiErrorStrategy=(errorData)=>{
    throw{
        ...errorData
    }as NotFoundError
}
export const unauthorizedErrorStrategy:ApiErrorStrategy=(errorData)=>{
    throw{
        ...errorData,
        detail:'دسترسی به سرویس مورد نظر امکان پذیر نمی باشد.'
    }as UnauthorizedError
}

export const unhandledExceptionStrategy:ApiErrorStrategy=(errorData)=>{
    throw{
        ...errorData,
        detail:'خطای سرور'
    }as UnhandledException
}
export const networkErrorStrategy=()=>{
    throw{
        
        detail:'خطای سرور'
    }as NetworkError
}
export const errorHandler:Record<number,ApiErrorStrategy>={
 400:(errorData)=>(errorData.errors ? validationErrorStrategy :badRequestsErrorStrategy)(errorData),
 403:unauthorizedErrorStrategy,
 404:notFoundErrorStrategy,
 500:unhandledExceptionStrategy
}