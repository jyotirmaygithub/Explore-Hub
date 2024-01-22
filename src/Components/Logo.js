import React from 'react'
import { useNavigate } from "react-router-dom";
import Logo from '../pictures/WebsiteLogo.svg'

export default function Heading() {
  const navigate = useNavigate();
  function handleLocation(){
    navigate(`/`)
  }
  return (
    <div>
      <img src={Logo} className='cursor-pointer' onClick={handleLocation} alt="" />
    </div>
  )
}
