"use client";

import { Button } from "@/app/_components/button/button";
import { SubmitHandler, useForm } from "react-hook-form";
import { Siginin } from "../types/signin.types";
import { TextBox } from "@/app/_components/textbox/textbox";
import { TextInput } from "@/app/_components/form-input";
import { useRouter } from "next/navigation";
import { useSignIn } from "../api/signin";
import { useNotificationStore } from "@/store/notification.store";
import { useEffect, useTransition } from "react";
import { signinSchema } from "../types/signin.schema";
import { zodResolver } from '@hookform/resolvers/zod';
import { signinAction } from "@/actions/auth";
import { useFormState } from "react-dom";

const SignInForm = () => {
    const {register,handleSubmit,formState: { errors },getValues} = useForm<Siginin>({
      resolver:zodResolver(signinSchema)
    })
    const [isPending,startTransition] = useTransition()
    const router = useRouter()
    const showNotifications = useNotificationStore(state=>state.showNotification)
   /* const signin = useSignIn({
      onSuccess:()=>{
        router.push(`/verify?mobile=${getValues('mobile')}`)
        showNotifications({
          type:'info',
          message:'کد تایید به شماره شما ارسال شد'
        })
      }
    })*/
    const [formState,action] = useFormState(signinAction, null)
    useEffect(()=>{
      if(formState && !formState.isSuccess && formState.error){
        showNotifications({
          message:formState.error?.detail!,
          type:'error'
        })
      }else{
      if(formState && formState.isSuccess){
        router.push(`/verify?mobile=${getValues('mobile')}`)
        showNotifications({
          type:'info',
          message:'کد تایید به شماره شما ارسال شد'
        })
      }
      }
    },[formState,showNotifications])
    const onSubmit=(data:Siginin)=>{
      const formData = new FormData()
      formData.append('mobile',data.mobile)
      startTransition(async()=>{
       await action(formData)
      })
       
    }

  return (
    <>
      <h5 className="text-2xl">ورود | ثبت نام</h5>
      <p className="mt-2">دنیای شگفت انگیز برنامه نویسی در انتظار شماست!</p>
      <form className="flex flex-col gap-6 mt-16" onSubmit={handleSubmit(onSubmit)}>
     

            <TextInput<Siginin>
              register={register}
              name={"mobile"}
              errors={errors}
              
            />
        <Button type="submit" variant="primary" isLoading={isPending}>
          تایید و دریافت کد
        </Button>
      </form>
    </>
  );
};

export default SignInForm;