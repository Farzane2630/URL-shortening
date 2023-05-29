import React from 'react';
import { Grid } from '@mui/material';

import './Hero.scss';

export default function Hero() {
  return (
    <>
      <Grid container justifyContent="center" alignItems="center" mb="6rem">
        <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }} className="hero-txt-wrapper" px="4rem">
          <div className="hero-header brand-name">More than just shorter links</div>
          <div className="hero-details">Build your brand's recognition and get detailed insights on how your links are performing.</div>
          <button className="blue-btn">Get Started</button>
        </Grid>
        <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
          <img src="/src/assets/illustration-working.svg" alt="hero-img" className="hero-img" />
        </Grid>
      </Grid>
    </>
  );
}
