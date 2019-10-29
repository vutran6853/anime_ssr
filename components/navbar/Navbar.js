import React from 'react'
import Link from 'next/link'
import './navbar.scss'

function Navbar() {
  return (
    <div className="navbar_container">
      {/* <Link href="">
        <a>Home</a>
      </Link> */}
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/genres">
        <a>Genres</a>
      </Link>
      <Link href="/contact">
        <a>Contact</a>
      </Link>
      {/* <Link href="/categories">
        <a>Categories</a>
      </Link> */}
      <Link href="/manga">
        <a>Manga</a>
      </Link>
      <Link href="/trending">
        <a>Trending</a>
      </Link>
    </div>
  )
}

export default Navbar
