import React from 'react'
import AppLogo from './Logo'
import Search from './Search'
import Addfunc from './Addfunc'
import { useNavigate } from 'react-router-dom'

export default function Navbar() {
  const navigate = useNavigate();
  function handleLocation(){
    navigate(`/`)
  }
  return (
    <>
    <div className=' fixed top-0 z-40 flex justify-between px-3 py-6 items-center w-full bg-gray-200'>
      <div className='flex space-x-3'>
      <div className='flex space-x-1 justify-center items-center'>
        <AppLogo/>
        <p className='font-bold text-[18px] cursor-pointer' onClick={handleLocation}>ExploreHub</p>
        </div> <Search/>
      </div>
    </div>
    </>
  )
}
