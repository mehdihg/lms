'use client'
import Image from "next/image"
import { TopNav } from "./top-navigation"

export const Header=()=>{
   
    return(
        <header className="border-b dark:border-base-content dark:border-opacity-5">
            <div className="container flex items-center justify-between">
                <Image src='/images/logo-light.svg' width={100} height={36} alt="کلاسبن"/>
                <TopNav className="hover:text-primary transition-colors pb-2 mr-12"/>
                <span className="mr-auto">user authentication</span>
            </div>
        </header>
    )
}