import Image from 'next/image'
import { Button } from './_components/button'
import { HomeHeroSection } from './_components/home-hero-section/home-hero-section'
import { NewCouresesSummary } from '@/types/new-courses-summary-interface'

async function getNewCourses(count:number):Promise<NewCouresesSummary[]>{
 const res= await fetch(`https://api.classbon.com/api/courses/newest/${count}`,{next:{
  revalidate:24*60*60
 }});
 return res.json()
}

export default async function Home() {
  const newestCourses=await getNewCourses(4)

  
  return (
    <>
    <HomeHeroSection/>
   
    </>
  )
}
