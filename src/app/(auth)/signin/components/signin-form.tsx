"use client";

import { Button } from "@/app/_components/button/button";
import { SubmitHandler, useForm } from "react-hook-form";
import { Siginin } from "../types/signin.types";
import { TextBox } from "@/app/_components/textbox/textbox";
import { TextInput } from "@/app/_components/form-input";


const SignInForm = () => {
    const {register,handleSubmit,formState: { errors }} = useForm<Siginin>()
    const onSubmit=(data:any)=>{
        console.log(data);
        
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
        <Button type="submit" variant="primary">
          تایید و دریافت کد
        </Button>
      </form>
    </>
  );
};

export default SignInForm;