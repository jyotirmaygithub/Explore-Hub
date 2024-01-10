import React from 'react'
import Logo from '../pictures/searcherlogo.png'

export default function Heading() {
  return (
    <div className='flex justify-center items-center'>
      <img src={Logo} alt="" />
      <h2 className='font-bold'>Searcher</h2>
    </div>
  )
}
