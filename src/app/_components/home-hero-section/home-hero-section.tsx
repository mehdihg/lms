import Image from "next/image"
import { Button } from "../button"
import { IconArrowLeftFill } from "../icons/icons"


export const HomeHeroSection=()=>{
    return(
        <section className='bg-hero-pattern bg-no-repeat bg-center xl:bg-left mt-5 xl:mt-20'>
      <div className='container flex flex-col-reverse items-center lg:flex-row'>

      
      <div className='flex flex-col text-center gap-5 mt-12 pb-5 xl:text-right'>
        <h3 className='text-xl dark:text-info xl:text-2xl'>خوش آمدید به ...</h3>
        <h1 className='text-3xl lg:text-3xl xl:text-5xl gradient pb-2'>مسیر صعود به قله های برنامه نویسی</h1>
        <p className='text-lg font-bold leading-8'>
        هر جای مسیرِ برنامه‌نویسی که باشی، با هم‌راهی استادهای باتجربهٔ
              کلاسبن می‌تونی بدون محدودیت به قله‌های بالاتر صعود کنی. ما همیشه
              هواتو داریم.
        </p>
        <div className='flex gap-4 mt-5 mb-3 justify-center xl:justify-start'>
        <Button variant='primary' size='large'>دوره های ری اکت و نکست
          <IconArrowLeftFill fill="currentColor" />
        </Button>
        <Button variant='neutral' size='large'>مشاوره های برنامه نویسی</Button>
        </div>
        <Image src='/images/frameworks.png' className='grayscale mt-4 opacity-70 m-auto xl:m-0' width={412} height={39} alt='frameworks'/>
      </div>
      <Image src='/images/programmer-landing.svg'  width={702} height={521} alt='programmer'/>
      </div>
      
    </section>
    )
}