import React from 'react'
import {Link} from 'react-router-dom'
import Logo from '../assets/img/logo.svg'
function Header() {
  return (
    <header className='py-6 mb-12 border-b'>
      <div className='container mx-auto flex justify-between items-center' >
        <Link to = '/'>
          <img src = {Logo} alt= 'logo'/>
        </Link>
        {/* buttons */} 
        <div className='flex items-center gap-3'>
          <Link className='bg-violet-700 hover:bg-violet-800 text-white px-4 py-3 rounded-lg' to=''>
          LogIn
          </Link>
          <Link className='bg-violet-700 hover:bg-violet-800 text-white px-4 py-3 rounded-lg' to=''>
          SignUp
          </Link>
        </div>

      </div>
    </header>
  )
}

export default Header