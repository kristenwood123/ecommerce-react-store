import React, { useState } from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { Navbar, Nav, Container } from 'react-bootstrap';


const Navigation = () =>  {
 

  return (
    <>
     <Navbar collapseOnSelect fixed='top' expand='sm' bg='dark' variant='primary'>
        <Container>
            <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
            <Navbar.Collapse id='responsive-navbar-nav'>
              <Nav>
                <Navbar.Brand><img src="https://cdn.shopify.com/s/files/1/2293/1277/files/Sangin_Instruments_Logo_Black_f8c6bcd2-aca5-405e-8517-e132e2156e76_180x.png?v=1546999822" alt="sangin logo" href='#home'/> </Navbar.Brand>
                    <Nav.Link href='/'>HOME</Nav.Link>
                    <Nav.Link href='/timepieces'>SHOP</Nav.Link>
                    <Nav.Link href='/'>ABOUT</Nav.Link>
                    <Nav.Link href='/timepieces'>STORY</Nav.Link>      
                    <Nav.Link href='/timepieces'>CONNECT</Nav.Link>      
                    <Nav.Link href='/cart'> <FaShoppingCart className='Navbar__bag'/></Nav.Link>
              </Nav>  
            </Navbar.Collapse>  
          </Container>           
      </Navbar>
    </>
  )
}

export default Navigation

