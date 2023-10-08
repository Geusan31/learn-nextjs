import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <nav className='flex bg-slate-300 justify-between font-semibold text-black items-center w-full px-10 py-5'>
      <h1 className='text-lg'>Learn Next JS</h1>
      <ul className='flex justify-between items-center gap-8'>
        <li className='text-blue-600'>Home</li>
        <li>About</li>
        <li>Services</li>
      </ul>
    </nav>
  )
}
