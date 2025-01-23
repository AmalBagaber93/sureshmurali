import React from 'react'
import HeroSecton from './hero-secton/hero-secton'
import AboutMe from './about-me/about-me'
import DesignSystem from './design-system/design-system'
import Footer from './footer/footer'
import Skills from './skills/skills'

const HomePage = () => {
  return (
    <div>
        <HeroSecton/>
        <AboutMe/>
        <DesignSystem/>
        <Skills/>
        <Footer/>
    </div>
  )
}

export default HomePage
