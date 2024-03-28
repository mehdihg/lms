
import './globals.css'
import {Figtree} from '@next/font/google'
import localFont from 'next/font/local'


import { Header } from './_components/header'
import { Footer } from './_components/footer'
const figtree = Figtree({
  display:'swap',
    subsets:['latin'],
  weight:['300','400','500','600','700','900'],
  variable:'--font-figtree'
})
const myFont = localFont({
  src: '../../public/fonts/Yekan.woff',
  display: 'swap',
  variable:'--font-yekan'
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={`dark ${figtree.variable} ${myFont.variable} ` }>
      <body dir='rtl' className=' flex flex-1 min-h-screen grid grid-rows-[80px_1fr_auto] dark:bg-base-100 dark:text-base-content'>
        <Header/>
        <div>
          {children}
        </div>
        <Footer/>
        </body>
    </html>
  )
}
