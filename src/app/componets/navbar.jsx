'use client'

import React, { useState, useEffect } from 'react';
import Menu from './navbar-menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsStaggered, faTimes } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';
import Link from 'next/link';
import Image from 'next/image'
import CatLogo from './images/cat_logo.svg'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [nav, setNav] = useState(false)
  const [imgSize, setImgSize] = useState(80)

  useEffect(() => {
    function activateNav() {
      let scrollPosition = window.pageYOffset
      if(scrollPosition > 200) {
        setNav(true)
        setImgSize(70)
      } else if (scrollPosition < 10) {
        setNav(false)
        setImgSize(85)
      }
    }
    window.addEventListener("scroll", activateNav)
  })

  const menuToggle = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <div className={`navbar ${nav && 'navbar-active'}`}>
      <div className="container">
        <Link href="#" className="brand">
          <Image className='navbar-img' src={CatLogo} width={imgSize} height={imgSize}></Image>
        </Link>
        <Menu menuOpen={menuOpen}/>
        <div className="menu-btn">
          <FontAwesomeIcon icon={menuOpen ? faTimes: faBarsStaggered} onClick={menuToggle} />
        </div>
        
      </div>
    </div>
  )
}

export default Navbar;