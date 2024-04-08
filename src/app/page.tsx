"use client"
import{Header} from '@/components/Header'
import{Main, Second}from'@/components/Main'   
  

function Page(){
  return(
    <div className='overflow-x-hidden'>
      <Header/>
      <Main/>
      <Second/>
    </div>
  )
}

export default Page;