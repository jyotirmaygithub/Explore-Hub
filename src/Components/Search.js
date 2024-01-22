import React from 'react'
import {UserEntertedInput} from "../Context/SearchContext"
import Suggestions from './Suggestions'


export default function Search() {
  const {setuserinput,searchTerm ,setsearchTerm,setdisplay} = UserEntertedInput()

  function writesubmit(e){
    e.preventDefault()
    setuserinput(searchTerm)
    setdisplay(false)
  }
  function handleInputChange(e){
    setsearchTerm(e.target.value);
    setdisplay(true);
  }
  return (
    <>
    <div className='space-y-1'>
    <div>
      <form onSubmit={writesubmit}>
        <input value={searchTerm} placeholder='Search or type URL' onChange={handleInputChange} className='pl-3 p-[10px] w-[50vw] outline-none border-none rounded input-bar' type="search"  />
      </form>
    </div>
    <Suggestions/>
    </div>
    </>
  )
}
