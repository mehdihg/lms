'use server'

import { signinSchema } from "@/app/(auth)/signin/types/signin.schema"
import { OpertaionResults } from "@/types/operation-result"
import { serverActionWrapper } from "../server-action-wrapper"
import { createData } from "@/core/http-service/http-serveice"
import { Siginin } from "@/app/(auth)/signin/types/signin.types"
import { SendAuthCode } from "@/app/(auth)/verify/_types/verify-model.types"

export async function signinAction(formState: OpertaionResults<string> | null, formData: FormData) {
    const mobile = formData.get('mobile')as string
   // const validatedData = signinSchema.safeParse({
   //     mobile 
   // })
   // if (!validatedData.success) {
      //  return {
    //        message: 'خطا در فرمت موبایل'
     //   }

   // } else {
        return serverActionWrapper(async()=>await createData<Siginin,string>('/signin',{
            mobile 
        }))


      
//    }


}

export async function sendAuthCode(
  formState:OpertaionResults<string> | null,
  mobile:string
){
  return serverActionWrapper(
    async()=>await createData<SendAuthCode,string>('/send-auth-code',{mobile})
  )
}