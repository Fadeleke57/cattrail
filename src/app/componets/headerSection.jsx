'use client'
import Image from 'next/image'
import './headerSection.css'
import cattrail_white from './images/cattrail_white.svg'
import Button from './buttons'
import FadeUp from './fadeUp'
import { useState, useEffect } from 'react'

function Header() {

    return (
        <header>
            <div className='header-content-div'>
            
                <div className='header-logo-div'><Image className='cattrail-image' src={cattrail_white} width={500} height={200}/></div>
                
                <FadeUp>
                <div className='header-text-div'><h3>a single-family office</h3></div>
                </FadeUp>

                <FadeUp>
                <div className='header-button-div'><Button type="btn-secondary" value="Contact Us"></Button></div>
                </FadeUp>
            </div>
        </header>
    )
}

export default Header;