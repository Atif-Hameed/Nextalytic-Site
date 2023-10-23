import React from 'react'
import Hero from '../../components/Hero'
import Services from '../../components/Services'
import About from '../../components/About'
import CaseStudies from '../../components/CaseStudies'
import Modalities from '../../components/Modalities'
import Testimonials from '../../components/Testimonials'
import Embark from '../../components/Embark'
import Footer from '../../components/Footer'

const Home = () => {
  return (
    <>
      <div>
        <Hero/>
        <Services/>
        <About/>
        <CaseStudies/>
        <Modalities/>
        <Testimonials/>
        <Embark/>
        <Footer/>
      </div>
    </>
  )
}

export default Home
