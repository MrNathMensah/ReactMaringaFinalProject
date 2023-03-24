import React from 'react'
import './AboutPage.css'
import Class2022 from './Class2022'
import Footers from './Footers'
import Header from './Header'

const AboutPage = () => {
  return (
    <div>
        <Header/>

    <div>

    </div>
    <div className='aboutp'>
      <h1>The Ghana-India Kofi Annan Centre of Excellence in ICT (AITI-KACE)</h1>
      <p>
        AITI-KACE is Ghana's first Advanced Information Technology Institute, established in 2003 through a partnership between the government of Ghana and the government of India. The centre also houses West Africa's first supercomputer and can host close to 1000 people at any given time.
      </p>
      <p>
        The institute was created as a result of a bilateral agreement during a state visit to India by H.E. John Agyekum Kufuor, President of Ghana, in 2002. India provided computer hardware, software, and other communication equipment, training for instructors and the curriculum, while Ghana provided the infrastructure and administrative and technical staff. AITI-KACE was officially launched on December 9th, 2003.
      </p>
    </div>
    <div>
        <Footers/>
    </div>
    </div>
  )
}

export default AboutPage
