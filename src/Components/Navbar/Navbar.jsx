import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='Nav'>
      <div className='title' style={{display:"block"}}>
        <h2>Flex Business Pro</h2>
        <p style={{marginTop:"-25px",marginLeft:"7px",fontSize:"13px"}}>Clean and Modren Business Theme</p>
      </div>
      <div className='menu'>
        <a href="./navbar.jsx">Home</a>
        <a href="./navbar.jsx">About</a>
        <a href="./navbar.jsx">Styleguide</a>
        <a href="./navbar.jsx">Blog</a>
        <a href="./navbar.jsx">Contact</a>
      </div>
    </div>
  )
}

export default Navbar;
