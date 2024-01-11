import React from 'react'
import AppLogo from './Logo'
import Search from './Search'
import Addfunc from './Addfunc'

export default function Navbar() {
  return (
    <>
    <div className=' fixed top-0 z-40 flex justify-between px-8 py-6 items-center w-full bg-gray-100'>
      <div className='flex space-x-3'>
      <div className='flex space-x-2 justify-center items-center'>
        <AppLogo/>
        <p className='font-bold text-[18px]'>ExploreHub</p>
        </div> <Search/>
      </div>
      <Addfunc/>
    </div>
    </>
  )
}
