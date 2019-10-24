import React from 'react'
import Link from 'next/link'
// import {Link} from 'react-router-dom'
import './navbar.scss'

const Navbar = () => {
  return (
    <div className="navbar_container">
      {/* <Link href="">
        <a>Home</a>
      </Link> */}
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/anime">
        <a>Anime</a>
      </Link>
      <Link href="/contact">
        <a>Contact</a>
      </Link>
      <Link href="/Categories">
        <a>Categories</a>
      </Link>
      
    </div>
  )
}

export default Navbar
