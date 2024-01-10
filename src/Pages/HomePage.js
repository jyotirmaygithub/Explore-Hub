import React from 'react'
import Search from '../Components/Search'
import Addfunc from '../Components/Addfunc'
import Heading from '../Components/Heading'
import Logo from "../pictures/searcherlogo.png"

export default function HomePage() {
  return (
    <div className='flex-col'>
      <div className='flex justify-between items-center px-12 py-5'>
        <img src={Logo} alt="Logo"/>
      <Addfunc/>
      </div>
      <div className='flex flex-col items-center justify-center space-y-7'>
      <Heading/>
      <Search/>
      </div>
      {/* <button>submit</button>
      <h1>something is here</h1> */}
    </div>
  )
}
