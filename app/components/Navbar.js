"use client"
import React from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";


function Navbar() {
 
  return (
    <>
    <nav className='flex justify-between  bg-sky-500/50 p-2'>
        <div className='p-1 font-semibold tracking-widest px-2 text-xl'>
        <Link href={'/'}>Ariizz</Link>
        </div>
        <div className='flex gap-8 mr-4 '>
          <div className="flex gap-4 sections mt-1 mx-4 ">
            <span className='px-2 hover:font-semibold hover:border-b-4 hover:transition duration-200 hover:border-blue-300'><Link href={'#about'}>About</Link></span>
            <span className='px-2 hover:font-semibold hover:border-b-4 hover:transition duration-200 hover:border-blue-300'><Link href={'/about'}>Contact</Link></span>
            <span className='px-2 hover:font-semibold hover:border-b-4 hover:transition duration-200 hover:border-blue-300'><Link href={'/about'}>CV</Link></span>
          </div>
         <button>
          <MoonIcon className='w-6 h-6 '/>
         </button>
        </div>
    </nav>
    </>
  )
}

export default Navbar