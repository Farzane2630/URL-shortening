import React, { useState } from 'react'

import "./InputElement.scss"
import { Grid } from '@mui/material'
import { Container } from 'react-bootstrap'
import PrevLink from '../PreLink/PrevLink'

export default function InputElement() {

   const [isValid, setIsValid] = useState(false)
   return (
      <Container className='input-parent' style={{ display: "flex", justifyContent: "center" }}>
         <Grid className='input-wrapper' container mx="5rem">
            <Grid className="input" item xs={12} md={9}>
               <input type="text" className={`link-input ${!isValid ? "red-outline" : ""}`} placeholder='Shorten a link here...' />
               {
                  !isValid ? (
                     <span className="error-txt red">Please add a link</span>
                  ) : ""
               }
            </Grid>
            <Grid className="input" item xs={12} md={3} px="2rem">
               <button className="blue-btn shorten-btn">Shorten It!</button>
            </Grid>
         </Grid>
      </Container>
   )
}
