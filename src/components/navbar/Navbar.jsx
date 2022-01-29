import React from 'react'
import {CgClose} from 'react-icons/cg'
import {Link} from 'react-scroll'
import { useGlobal } from '../../context/context'
const Navbar = () => {
  const {navOpen, setNavOpen} = useGlobal()
  return (
    <div className={navOpen ? "navbar show-nav" : "navbar"} >
      <div className="navbar-toggle">
        <CgClose onClick={() => {setNavOpen(false)}} className='navbar-toggle-btn'/>
      </div>
      <div className="navbar-links">
        <Link onClick={() => setNavOpen(false)} to='home' smooth duration={1000} className="navbar-link">Home</Link>
        <Link onClick={() => setNavOpen(false)} to='conserve' smooth duration={1000} className="navbar-link">Why?</Link>
        <Link onClick={() => setNavOpen(false)} to='people' smooth duration={1000} className="navbar-link">People</Link>
        <Link onClick={() => setNavOpen(false)} to='gallery' smooth duration={1000} className="navbar-link">Gallery</Link>
        <Link onClick={() => setNavOpen(false)} to='archive' smooth duration={1000} className="navbar-link">Articles</Link>
      </div>
    </div>
  )
}

export default Navbar
