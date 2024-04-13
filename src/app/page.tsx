"use client"
import { Header } from '@/components/Header'
import { Main, Second } from '@/components/Main'
import { Footer } from "@/components/Footer"

function Page() {
  return (
    <div className='overflow-x-hidden'>
      <Header />
      <Main />

      
        <Second />
      
      <Footer />
    </div>
  )
}

export default Page;