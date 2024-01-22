import React,{useEffect,useState} from 'react'
import { Link,useLocation } from 'react-router-dom'

export default function Category() {
  const location = useLocation();
  return (
    <>
    <div className='flex justify-start mt-24 items-center '>
      <Link className={`link ${location.pathname === "/links" ? "bg-slate-200" : ""}`} to="/links">
        <li>🔍Links</li>
      </Link>
      <Link className={`link ${location.pathname === "/images" ? "bg-slate-200" : ""}`} to="/images">
        <li>📷Images</li>
      </Link>
      <Link className={`link ${location.pathname === "/news" ? "bg-slate-200" : ""}`} to="/news">
        <li>🗞️News</li>
      </Link>
      <Link className={`link ${location.pathname === "/videos" ? "bg-slate-200" : ""}`} to="/videos">
      <li>📽️Videos</li>
      </Link>
    </div>
      <hr />
    </>
  )
}
