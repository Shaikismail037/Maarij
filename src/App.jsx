import React from 'react'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import ScrollReveal from 'scrollreveal'
import Steps from './Components/Steps'
import About from './Components/About'
// import Testimonials from './Components/Testimonials'
import Brands from './Components/Brands'
import Work from './Components/Work'
import Stats from './Components/Stats'
import Contact from './Components/Contact'
import Footer from './Components/Footer'



const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Steps />
      <About />
      {/* <Testimonials/> */}
      <Brands />
      <Work />
      <Stats />
      <Contact />
      <Footer />
    </>
  )
}

export default App