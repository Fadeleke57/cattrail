'use client'
import Image from 'next/image'
import './section1.css'
import vennDiagram from './images/WhatWeDo.svg'
import Button from './buttons'
import FadeUp from './fadeUp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBolt, faMap, faLightbulb } from '@fortawesome/free-solid-svg-icons'
import line from './images/line.svg.svg'


function Section1 () {
    return (
        <section className='card1'>

        <div className='card1-introduction'>

        <FadeUp>
        <div className='card1-image-div'><Image src={vennDiagram} className='venn-diagram'></Image></div> 
        </FadeUp>

        <div className='card1-header-div'><div><h1>What We Do</h1><br></br><p>lorem ipsum lorem ipusm lorem ipsum lorem ipsum lorem<br/> ipsum lorem ipsum lorem ipusm lorem </p></div> <div><Button value="Learn More" type="btn-tertiary"></Button> </div></div>

        </div>
        <FadeUp>
        <div className='card1-information'>
            <Image src={line} className='line1'></Image>
            <div>
                
                <FontAwesomeIcon className='box-icon' icon={faBolt} style={{color: "#88b886",}} />
                <h3>Investment<br></br>Management</h3> <br></br>
                <p>Cat Trail takes strategic positions in publicly traded securities, makes placements with unique
                fund managers, manages a portfolio of real assets, and occasionally invests in small private
                companies. Investing in both debt and equity, Cat Trail establishes active, on-going relationships
                with those with whom it invests. Investment partners are carefully selected based on their ability
                to achieve differentiation and generate true “alpha”.
                </p>
        

            </div> 
            
            <div>
                <FontAwesomeIcon icon={faMap} className='box-icon' style={{color: "#88b886",}}/> 
                
                <h3>Wealth<br></br>Planning</h3> <br></br>
                <p>Provides a full suite of customized services, Cat Trail coordinates with trusted advisors to meet
                the needs of the Dekkers, extended family and friends. Services include multigenerational estate
                planning, tax strategy, portfolio reporting &amp; analytics, and financial planning.
                </p>
           
                
            </div> 
            
            <div>
                <FontAwesomeIcon icon={faLightbulb} className='box-icon' style={{color: "#88b886",}}/>
                <h3>Learning & <br></br>Philanthropy</h3> <br></br>
                <p>Cat Trail attempts to optimize the impact of its giving strategy and works with the Dekker
                Foundation to support its philanthropic mission. More information on the Dekker Foundation can
                be found here.  

                Cat Trail also recognizes the importance of learning and developing financial acumen. In support
                of financial literacy, Cat Trail provides programs intended to develop financial-skills education
                to family members across generations. Cat Trail has also cultivated an outreach to universities to
                offer summer internships. These educational training programs offer flex time to carefully
                selected college students.
                </p>
                
            </div>
            <Image src={line} className='line2'></Image>
        </div>
        </FadeUp>
        </section>
    )
}

export default Section1