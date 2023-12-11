'use client'
import Image from 'next/image'
import './headerSection.css'
import cattrail_green from './images/cattrail_green.svg'
import Button from './buttons'
import { Fade } from "react-awesome-reveal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'


function Header() {
    return (
      <header>
        <div className='header-content-div'>
            <Fade cascade direction='up' triggerOnce>
              <div className='header-logo-div'>
                <Image className='cattrail-image' src={cattrail_green} alt='logo' />
              </div>
  
              <div className='header-text-div'>
                <p>A single-family office serving the Dekker family</p>
              </div>
  
              <div className='header-button-div'>
                <Button type="btn-tertiary" value="Contact Us" />
              </div>
            </Fade>
        </div>
        <a href='#About'>
        <div className='header-arrow-div'>
          <FontAwesomeIcon icon={faArrowDown} bounce className='header-arrow-icon' />
        </div>
        </a>
      </header>
    );
  }
  
  export default Header;