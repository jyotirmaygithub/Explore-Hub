import React from 'react'
import Logo from './Heading'
import Search from './Search'
import Addfunc from './Addfunc'

export default function Navbar() {
  return (
    <>
    <div className=' fixed top-0 z-40 flex justify-between px-14 py-5 items-center w-full bg-gray-200'>
      <div className='flex space-x-3'>
      <Logo/>
      <Search/>
      </div>
      <Addfunc/>
    </div>
    </>
  )
}
