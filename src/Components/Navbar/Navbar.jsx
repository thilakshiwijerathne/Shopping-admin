import React from 'react'
import './Navbar.css'
import navProfile from '../../assets/nav-profile.svg'

const Navbar = () => {
  return (
    <div className='navbar'>
      <p className='logo'>Bliss</p>
      <p className='AP'>Admin Panel</p>
      <img src={navProfile} alt="" className='nav-profile' />

    </div>
  )
}

export default Navbar
