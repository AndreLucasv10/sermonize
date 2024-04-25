"use client"
import { Header } from '@/components/Header'
import { Main, Second } from '@/components/Main'
import { Footer } from "@/components/Footer"
import PersonCard from '@/components/PersonCard'

function Page() {
  return (
    <div className='overflow-x-hidden'>
      <Header />
      <Main />
      <PersonCard />    
      <Footer />
    </div>
  )
}

export default Page;