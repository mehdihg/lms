import { createData } from "@/core/http-service/http-serveice";
import { Siginin } from "../types/signin.types";
import { useMutation } from "@tanstack/react-query";

const signin = (model:Siginin):Promise<void>=>createData<Siginin,void>("/signin",model)

type UseSignInOptions ={
    onSuccess?:()=>void
}

export const useSignIn = ({onSuccess}:UseSignInOptions)=>{
    const {mutate:submit,isPending}=useMutation({
        mutationFn:signin,
        onSuccess:onSuccess
    })
    return {submit,isPending}
}