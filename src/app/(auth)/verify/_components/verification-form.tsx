"use client"
import { Button } from "@/app/_components/button/button";
import Link from "next/link";
import AuthCode from "@/app/_components/auth-code/auth-code";
import { useRef, useState } from "react";
import { AuthCodeRef } from "@/app/_components/auth-code/auth-code.types";
import { Timer } from "@/app/_components/timer/timer";
import { TimeRef } from "@/app/_components/timer/timer.types";
import { useSendAuthCode } from "../_api/send-auth-code";
import {  useNotificationStore } from "@/store/notification.store";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { VerifyModel } from "../_types/verify-model.types";

  const getTwoMinutesFromNow=()=>{
    const time =new Date()
    time.setSeconds(time.getSeconds() + 120)
    return time
  }

const VerificationForm = () => {
  const [showResendCode,setShowResendCode] = useState<boolean>(false)
  const refAuthCode = useRef<AuthCodeRef>(null)
  const timerRef=useRef<TimeRef>(null)

  const params =useSearchParams()
  const username=params.get('mobile')
  const showNotifications=useNotificationStore(state=>state.showNotification)
  const {handleSubmit,register,setValue,formState:{isValid}} = useForm<VerifyModel>()
  const sendAuthCode = useSendAuthCode({
    onSuccess:()=>showNotifications({
      type:'info',
      message:'کد تاییدبه شماره شما ارسال شد!'
    })
  })
  register('code',{
    validate:(value:string)=>(value?? "").length === 5
  })
  const onResendAuthCode=()=>{
    timerRef.current?.restart(getTwoMinutesFromNow())
    setShowResendCode(false)
    sendAuthCode.submit(username!)
    refAuthCode.current?.clear()
  }
  const onSubmit=(data:VerifyModel)=>{
    if(username){
      data.username=username
      console.log(data);
      
    }

    
  }
  return (
    <>
      <h5 className="text-2xl">کد تایید</h5>
      <p className="mt-2">دنیای شگفت انگیز برنامه نویسی در انتظار شماست!</p>
      <form
        className="flex flex-col gap-6 mt-10 flex-1"
        onSubmit={handleSubmit(onSubmit)}
      >

        <AuthCode ref={refAuthCode} className="mt-10" onChange={value=>{
          setValue('code',value,{shouldValidate:true})
          
        }}/>


        <Timer expiryTimestamp={getTwoMinutesFromNow()} onExpire={()=>setShowResendCode(true)} size="tiny"  showDays={false} showHours={false}/>
        <Button
          isLink={true}
          onClick={onResendAuthCode}
          isDisabled={!showResendCode}
          
        >
          ارسال مجدد کد تایید
        </Button>
        <Button
          type="submit"
          variant="primary"
          isDisabled={!isValid}
          
        >
          تایید و ادامه
        </Button>

        <div className="flex items-start gap-1 justify-center mt-auto">
          <span>برای اصلاح شماره موبایل</span>
          <Link href="/signin">اینجا</Link>
          <span>کلیک کنید</span>
        </div>
      </form>
    </>
  )
}

export default VerificationForm;