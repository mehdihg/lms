import { Problem } from "./http-errors.interface";

export type OpertaionResults<T> = {
    isSuccess:boolean;
    error?:Problem
    response?:T
}