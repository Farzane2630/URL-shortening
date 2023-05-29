import React from 'react'
import { Grid } from "@mui/material"

import './AdvancedStatistics.scss'
import StaticCard from '../StaticCard/StaticCard'
import { useSelector } from 'react-redux'
export default function AdvancedStatistics() {

   const cardData = useSelector(state => state.cardData)

   return (
      <div className='advanced-statistics'>
         <h2 className='dark-primary static-header'>Advanced Statistics</h2>
         <p className="static-details">
            Track how your links are performing across the web with our advanced statistic dashboard.
         </p>
         <Grid container justifyContent="center" className="static-cards">
            {
               cardData.map(data => {
                  <Grid item xs={12} md={4} className="statics-card-grid">
                     <StaticCard
                        icon={data.icon}
                        title={data.title}
                        details={data.details}
                     />
                  </Grid>
               })
            }

         </Grid>
      </div>
   )
}
