import React from 'react'
import Header from '../Components/Header'
import Hero from './Hero'
import AboutSection from './AboutSection'
import './CSS/HOme.css'
import Services from './Services'
import TechnologyWorks from './TechnologyWorks'
import ProjectDelivered from './ProjectDelivered'
import WhyChoose from './WhyChoose'
import ReviewsPage from './Reviews'
import ContactPage from './ContactPage'
import Footer from '../Components/Footer'
function Home() {
  return (
    <div className='Home-outer'>
      <Header/>
      <Hero/>
      <AboutSection/>
      <Services/>
      <TechnologyWorks/>
      <ProjectDelivered/>
      <WhyChoose/>
      <ReviewsPage/>
      <ContactPage/>
      <Footer/>
    </div>
  )
}

export default Home
