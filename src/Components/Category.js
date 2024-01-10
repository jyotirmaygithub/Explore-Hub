import React from 'react'
import { Link } from 'react-router-dom'

export default function Category() {
  return (
    <>
    <div className='flex justify-start mt-20 items-center '>
      <Link className='link' to="/links">
        <li>🔍Links</li>
      </Link>
      <Link className='link' to="/images">
        <li>📷Images</li>
      </Link>
      <Link className='link' to="/news">
        <li>🗞️News</li>
      </Link>
      <Link className='link' to="/videos">
      <li>📽️Videos</li>
      </Link>
    </div>
      <hr />
    </>
  )
}
