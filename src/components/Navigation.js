import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { useGlobalContext } from '.././context'

const Navigation = () =>  {
  const { amount } = useGlobalContext()
  return (
    <>
     <Navbar collapseOnSelect fixed='top' expand='sm' bg='dark' variant='dark'>
        <Container>
            <Navbar.Toggle aria-controls='responsive-navbar-nav' variant='dark'/>
            <Navbar.Collapse id='responsive-navbar-nav'>
              <Nav>
                <Navbar.Brand><img src="https://cdn.shopify.com/s/files/1/2293/1277/files/Sangin_Instruments_Logo_Black_f8c6bcd2-aca5-405e-8517-e132e2156e76_180x.png?v=1546999822" alt="sangin logo" href='#home' style={{filter: 'brightness(0) invert(1)'}}/> </Navbar.Brand>
                    <Nav.Link href='/' variant='dark' >HOME</Nav.Link>
                    <Link to='/timepieces' className='links'>SHOP</Link>
                    <Nav.Link href='/'>ABOUT</Nav.Link>
                    <Nav.Link href='/timepieces'>STORY</Nav.Link>      
                    <Nav.Link href='/timepieces'>CONNECT</Nav.Link>      
                    <Link to='/cart' className='links dark'> <FaShoppingCart 
                    className='Navbar__bag'
                    /> {amount}</Link>
              </Nav>  
            </Navbar.Collapse>  
          </Container>           
      </Navbar>
    </>
  )
}

export default Navigation

