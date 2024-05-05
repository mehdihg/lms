"use client"
import { Button } from "@/app/_components/button/button";
import Link from "next/link";
import AuthCode from "@/app/_components/auth-code/auth-code";
import { useRef } from "react";
import { AuthCodeRef } from "@/app/_components/auth-code/auth-code.types";
const VerificationForm = () => {
  const refAuthCode = useRef<AuthCodeRef>(null)
  return (
    <>
      <h5 className="text-2xl">کد تایید</h5>
      <p className="mt-2">دنیای شگفت انگیز برنامه نویسی در انتظار شماست!</p>
      <form
        className="flex flex-col gap-6 mt-10 flex-1"
      >

        <AuthCode ref={refAuthCode} className="mt-10" onChange={value=>{
          console.log(value);
          
        }}/>


        Timer
        <Button
          isLink={true}
          onClick={refAuthCode.current?.clear}
        >
          ارسال مجدد کد تایید
        </Button>
        <Button
          type="submit"
          variant="primary"
        
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