import React from 'react'
import Search from '../Components/Search'
import Addfunc from '../Components/Addfunc'
import AppLogo from '../Components/Logo'

export default function HomePage() {
  return (
    <div className='flex-col space-y-32'>
      <div className='flex justify-between items-center px-12 py-5'>
       <AppLogo/>
      <Addfunc/>
      </div>
      <div className='flex flex-col items-center justify-center space-y-7'>
        <div className='flex space-x-2 justify-center items-center'>
        <AppLogo/>
        <p className='font-bold text-3xl'>ExploreHub</p>
        </div>
      <Search/>
      </div>
    </div>
  )
}
