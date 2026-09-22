import React from 'react'
import Content from './components/content'
import About from './components/about'
import Contact from './components/contact'
import Feature from './components/feature'
import Team from './components/team'
import Hero from './components/hero'

const page = () => {
  return (
    <div>
      <Hero/>
      <Content />
      <Feature />
      <About/>
      <Team/>
      <Contact />
    </div>
  )
}

export default page
