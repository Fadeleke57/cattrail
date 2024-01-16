'use client'
import Image from 'next/image'
import './headerSection.css'
import cattrail_green from './images/cattrail_green.svg'
import Button from './buttons'
import { Fade } from "react-awesome-reveal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import BackgroundImage from './images/pawprint2edited.jpg'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react'


function Header() {

    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {
      // parallax animation
      gsap.to(".bg-image", {
        y: 300, // move on the y axis
        scrollTrigger: {
          trigger: ".header-gsap-animation",
          start: "top top", // sets trigger start position
          scrub: true, // makes the animation follow the scroll position
        }
      });
    }, []); // makes sure this runs once after initial render

    return (
      <header className='header-gsap-animation'>

      <div className='bg-image'>
    
      </div>

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
