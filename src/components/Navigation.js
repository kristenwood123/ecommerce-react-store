import React from 'react'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import { BsSearch } from 'react-icons/bs'
import { AiOutlineUser } from 'react-icons/ai'
import { Navbar, Nav, Container } from 'react-bootstrap';
import { auth } from '../firebase'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '.././context'


const Navigation = () =>  {
  const { amount, user } = useGlobalContext()

  const handleAuthentication = () => {
    if(user) {
      auth.signOut()
    }
  }

  return (
    <>
     <Navbar collapseOnSelect fixed='top' expand='sm' bg='white' variant='light'>
      <Container>
         <Navbar.Toggle aria-controls='responsive-navbar-nav' variant='dark'/>
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='Nav'>
              <Navbar.Brand><img src="https://cdn.shopify.com/s/files/1/2293/1277/files/Sangin_Instruments_Logo_Black_f8c6bcd2-aca5-405e-8517-e132e2156e76_180x.png?v=1546999822" alt="sangin logo" href='#home'/></Navbar.Brand>
              <Link to='/' variant='dark' className='links'>Home</Link>
              <Link to='/timepieces' className='links'>Shop</Link>  
              <Link to='/timepieces' className='links'>About</Link>   
              <Link to='/timepieces' className='links'>Story</Link>                                      
              <Link to={!user && '/checkout'} className='links'>
                <div onClick={handleAuthentication}>
                  <span>{user ? 'SignOut' : 'Sign In' }</span></div></Link>      
              <Link to='/' className='links'/><BsSearch/>
              <Link to='/' className='links'/><AiOutlineUser/>
              <Link to='/cart' className='links'> <HiOutlineShoppingBag className='Navbar__bag'/>{amount === 0 ? '' : amount}</Link>
              </Nav>  
            </Navbar.Collapse>  
          </Container>           
      </Navbar>
    </>
  )
}

export default Navigation
