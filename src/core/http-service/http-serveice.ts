import { API_URL } from "@/configs/global";
import axios, { AxiosRequestConfig, AxiosRequestHeaders, AxiosResponse } from "axios";

import {
    Problem,
    BadRequestsError,
    ValidationError,
    UnauthorizedError,
    NotFoundError,
    UnhandledException,
    NetworkError
}
from '../../types/http-errors.interface'
import { errorHandler, networkErrorStrategy } from "./http-error-strategies";
type ApiError = BadRequestsError|ValidationError|UnauthorizedError|NotFoundError|UnhandledException
const httpService=axios.create({
    baseURL:API_URL,
    headers:{'Content-Type':'application/json'}
})

httpService.interceptors.response.use(function(response){
return response
},
function(error){
    if(error?.response){
        const statusCode=error?.response?.status;
        if(statusCode >=400){
            const errorData:ApiError = error?.response?.data;
     
            errorHandler[errorData.status](errorData)
          
            
           
        }
    }else{
        
            networkErrorStrategy()
        
    }
}
)

 async function apiBase<T>(url:string,options?:AxiosRequestConfig):Promise<T>{
    const response:AxiosResponse = await httpService(url,options)
    return response.data as T
}

 async function readData<T>(url:string,headers?:AxiosRequestHeaders):Promise<T>{
    const options:AxiosRequestConfig={
        headers:headers,
        method:'GET'
    }
    return await apiBase<T>(url,options) 
}

 async function createData<TModel,TResult>(url:string,data:TModel,headers?:AxiosRequestHeaders):Promise<TResult>{
    const options:AxiosRequestConfig={
        headers:headers,
        method:'POST',
        data:JSON.stringify(data) 
    }
    return await apiBase<TResult>(url,options)
}
 async function updateData<TModel,TResult>(url:string,data:TModel,headers?:AxiosRequestHeaders):Promise<TResult>{
    const options:AxiosRequestConfig={
        headers:headers,
        method:'PUT',
        data:JSON.stringify(data)  
    }
    return await apiBase<TResult>(url,options)
}
 async function deleteData(url:string,headers?:AxiosRequestHeaders):Promise<void>{
    const options:AxiosRequestConfig={
        headers:headers,
        method:'DELETE',
        
    }
    return await apiBase(url,options)
}
export {readData,createData,updateData,deleteData}