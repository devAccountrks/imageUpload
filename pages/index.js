import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <div className='h-screen w-screen bg-gray-900 flex justify-center items-center'>
    <div className='text-cyan-300'>Hi There!</div>
   </div>
  )
}
