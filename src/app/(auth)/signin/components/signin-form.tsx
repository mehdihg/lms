"use client";

import { Button } from "@/app/_components/button/button";
import { SubmitHandler, useForm } from "react-hook-form";
import { Siginin } from "../types/signin.types";
import { TextBox } from "@/app/_components/textbox/textbox";
import { TextInput } from "@/app/_components/form-input";
import { useRouter } from "next/navigation";
import { useSignIn } from "../api/signin";
import { useNotificationStore } from "@/store/notification.store";
import { useEffect } from "react";


const SignInForm = () => {
    const {register,handleSubmit,formState: { errors },getValues} = useForm<Siginin>()
    const router = useRouter()
    const showNotifications = useNotificationStore(state=>state.showNotification)
    const signin = useSignIn({
      onSuccess:()=>{
        router.push(`/verify?mobile=${getValues('mobile')}`)
        showNotifications({
          type:'info',
          message:'کد تایید به شماره شما ارسال شد'
        })
      }
    })
    const onSubmit=(data:Siginin)=>{
       
        signin.submit(data)
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
              rules={{
                required:'شماره موبایل الزامی است.',
                maxLength:{
                  value:11,
                  message:'شماره موبایل باید 11 رقم باشد!'
                },
                minLength:{
                  value:11,
                  message:'شماره موبایل باید 11 رقم باشد!'
                }
              }}
            />
        <Button type="submit" variant="primary" isLoading={signin.isPending}>
          تایید و دریافت کد
        </Button>
      </form>
    </>
  );
};

export default SignInForm;