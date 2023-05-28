import React from 'react'

import './StaticCard.scss'
export default function StaticCard({ icon, title, details }) {
   return (
      <div className='static-card-wrapper'>
         <div className="static-icon-wrapper">
            {icon}
         </div>
         <div className="dark-primary static-card-title">
            {title}
         </div>
         <p className="static-card-details">
            {details}
         </p>
      </div>
   )
}
