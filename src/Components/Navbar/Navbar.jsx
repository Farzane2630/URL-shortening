import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import './Navbar.scss'
import { Grid } from '@mui/material';

export default function NavbarMenu() {
  return (
    <Navbar expand="md" className='navbar'>
      <Container fluid>
        <Navbar.Brand href="#home" className='brand-name'>Shortly</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto menu-items-wrapper">
            <Nav.Link href="#home" className='menu-items'>Features</Nav.Link>
            <Nav.Link href="#link" className='menu-items'>Pricing</Nav.Link>
            <Nav.Link href="#link" className='menu-items'>Resources</Nav.Link>
          </Nav>
            <Grid item xs={12} md={6} className="nav-btns">
              <button className='log-in'>Login</button>
              <button className='blue-btn sign-up'>Sign Up</button>
            </Grid>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  )
}
