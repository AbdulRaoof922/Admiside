import React from 'react'
import { TiThMenu } from "react-icons/ti";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='w-full h-20 bg-white flex items-center shadow opacity-0.5 lg:w-full lg:h-20'>
      <div className='flex items-center justify-around w-3/6 h-full lg:w-1/5'>
        <h1 className='text-2xl'>Dawai.pk</h1>
        <Link to="/Sidebar">
        <TiThMenu size={30} />

        </Link>
      </div>
    </div>
  )
}

export default Header
