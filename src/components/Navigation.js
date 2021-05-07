import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { Navbar, Nav, Container } from 'react-bootstrap';
import { auth } from '../firebase'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '.././context'


const Navigation = () =>  {
  const { amount, dispatch, user } = useGlobalContext()
  console.log(user);

  const handleAuthentication = () => {
    if(user) {
      auth.signOut()
      console.log('singed out')
    }
  }

  return (
    <>
     <Navbar collapseOnSelect fixed='top' expand='sm' bg='white' variant='light'>
        <Container>
            <Navbar.Toggle aria-controls='responsive-navbar-nav' variant='dark'/>
            <Navbar.Collapse id='responsive-navbar-nav'>
              <Nav style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                <Navbar.Brand><img src="https://cdn.shopify.com/s/files/1/2293/1277/files/Sangin_Instruments_Logo_Black_f8c6bcd2-aca5-405e-8517-e132e2156e76_180x.png?v=1546999822" alt="sangin logo" href='#home'/></Navbar.Brand>
                    <Link href='/' variant='dark' >Home</Link>
                    <Link to='/timepieces' className='links'>Shop</Link>                                         
                    <Link to={!user && '/checkout'} className='links'>
                        <div onClick={handleAuthentication}>
                          <span>{user ?
                           'SignOut' : 
                           'SignIn'
                           }</span>
                        </div>
                      </Link>      
                    <Link to='/cart' className='links'> <FaShoppingCart 
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

