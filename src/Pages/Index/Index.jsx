import React, { useState } from 'react'
import NavbarMenu from '../../Components/Navbar/Navbar'
import Hero from '../../Components/Hero/Hero'
import InputElement from '../../Components/InputElement/InputElement'
import PrevLink from '../../Components/PreLink/PrevLink'
import AdvancedStatistics from '../../Components/AdvancedStatistics/AdvancedStatistics'
import Boost from '../../Components/Boost/Boost'
import Footer from '../../Components/Footer/Footer'
import { useDispatch, useSelector } from 'react-redux'

import './Index.scss'
import { setIsClicked } from '../../redux/savedLinks'
export default function Index() {
  const savedLinks = useSelector(state => state.links)
  const dispatch = useDispatch()

  const copyText = (cretedLink, linkID) => {
    savedLinks.find(link => {
      if (link.id === linkID) {
        dispatch(setIsClicked(linkID))
        navigator.clipboard.writeText(cretedLink)
          .then(() => {
            console.log("Text copied to clipboard:", cretedLink);
          })
          .catch((error) => {
            console.error("Failed to copy text:", error);
          });
      }
    })

  }
  return (
    <>
      <NavbarMenu />
      <Hero />
      <div className="index-body">
        <InputElement />
        {
          savedLinks.length > 0 ?
            savedLinks.map(link => (
              <PrevLink
                key={link.id}
                originalLink={link.originalLink}
                createdLink={link.createdLink}
                handleClick={() => copyText(link.createdLink, link.id)}
                statusBtn={link.isClicked ? "Copied!" : "Copy"}
              />
            ))

            : ""
        }

        <AdvancedStatistics />
      </div>
      <Boost />
      <Footer />
    </>
  )
}
