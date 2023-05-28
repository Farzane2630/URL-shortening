import React from 'react'
import NavbarMenu from '../../Components/Navbar/Navbar'
import Hero from '../../Components/Hero/Hero'
import InputElement from '../../Components/InputElement/InputElement'
import PrevLink from '../../Components/PreLink/PrevLink'
import AdvancedStatistics from '../../Components/AdvancedStatistics/AdvancedStatistics'
import Boost from '../../Components/Boost/Boost'
import Footer from '../../Components/Footer/Footer'

import './Index.scss'
export default function Index() {
  return (
    <>
      <NavbarMenu />
      <Hero />
      <div className="index-body">
        <InputElement />
        <PrevLink
          originalLink="www.frontentmentor.io"
          createdLink="frontendmentor"
          btnStatus="copy"
        />
        <AdvancedStatistics />
      </div>
      <Boost />
      <Footer />
    </>
  )
}
