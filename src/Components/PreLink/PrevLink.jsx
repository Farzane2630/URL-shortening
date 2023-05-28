import React from 'react'
import './PrevLink.scss'
import { Container } from 'react-bootstrap'

export default function PrevLink({ originalLink, createdLink, btnStatus }) {
   return (
      <Container style={{ display: "flex", justifyContent: "center", padding:"1rem 6rem"}}>
         <div className="prev-link-wrapper">
            <span className="original-link dark-primary">
               {originalLink}
            </span>
            <div className="result-work">
               <span className="created-link">
                  {createdLink}
               </span>
               <button className="blue-btn copy-btn">
                  {btnStatus}
               </button>
            </div>
         </div>
      </Container>
   )
}
