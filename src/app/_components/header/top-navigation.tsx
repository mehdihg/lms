import { TopNavigationType } from "@/types/topnavigation"

import Link from "next/link"
import { usePathname } from "next/navigation"
const TopNavigation:TopNavigationType[] = [
    {
        href:'/',
        title:'صفحه اصلی'
    },
    {
        href:'/courses',
        title:'دوره های ری اکت و نکست'
    },
    {
        href:'/blog',
        title:'وبلاگ'
    }
]
export const TopNav=({className}:{className?:string})=>{
    const path=usePathname()
    return(
      <ul className="flex">
        {
        TopNavigation.map((nav)=>{
            const isActive = path === nav.href
            return(
                <li key={nav.href } >
                    <Link  href={nav.href} className={`${className} ${isActive && 'border-b-2 dark:text-primary dark:border-primary/30' }`}>
                        {nav.title}
                    </Link>
                </li>
 
            )
        })
        }
      </ul>
    )
}