import React, { useState } from 'react'
import styled from 'styled-components'
import { Link, useHistory, Route } from 'react-router-dom'
import { auth } from '../firebase'

export const Checkout = () => {
  const history  = useHistory()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [email2, setEmail2] = useState('')
  const [password2, setPassword2] = useState('')

  const signIn = e => {
    e.preventDefault()

    auth
      .signInWithEmailAndPassword(email, password)
      .auth(auth => {
        history.push('/')
      })
      .catch(error => alert(error.message))

  }

  const createAccount = e => {
    e.preventDefault()
    auth
      .createUserWithEmailAndPassword(email2, password2)
      .then((auth) => {
        console.log(auth);
        if (auth) {
          history.push('/')
        }
      })
      .catch(error => alert(error.message))
  
  }
  return (
    <CheckoutSection>
      <div className="login-container">
        <h4>Login</h4>
        <p>Welcome back! If you have an Sangin account, sign in with your email address.</p>
        <form action="submit">
          <input type="text" 
            placeholder='Email' 
            value={email}
            onChange={e => setEmail(e.target.value)} />
          <input type="password" 
            placeholder='Password' 
            value={password}
            onChange={e => setPassword(e.target.value)} />
          <br></br>
          <button type='submit' 
            className='btn-white'
            onClick={signIn}>SIGN IN</button>
        </form>
      </div>

      <div className="new-account-container">
        <h4>New around here?</h4>
        <p>Create an account so you can check out faster, track orders, store multiple addresses and more.</p>

         <form action="submit">
          <input type="text" 
            placeholder='Email' 
            value={email2}
            onChange={e => setEmail2(e.target.value)} />
          <input type="password" 
            placeholder='Password' 
            value={password2}
            onChange={e => setPassword2(e.target.value)} />
          <br></br>
        </form>
        <div className="btn-container">
          <button className='btn-black'
          onClick={createAccount}>
              CREATE ACCOUNT
            </button>
            <p>OR</p>
            <Route render = {({history}) => (
               <button className='btn-black' onClick={() => history.push('./timepieces')}>RETURN TO STORE</button>
            )} />
        </div>
      </div>          
   </CheckoutSection>
  )
}

export default Checkout


const CheckoutSection = styled.section`
  margin: 0 auto;
  color: white;
  padding-top: 100px;
  display: flex;
  align-items: center;

  .login-container,
  .new-account-container {
    text-align: center;
    margin: 10px;

    p {
      font-size: 12px;
      margin: 0;
      padding-top: 10px;
      max-width: 400px;
    } 

    input[type] {
      background-color: black;
      color: white;
      border: 1px solid white;
      height: 45px;
      max-width: 428px;
      margin-top: 5px;
      margin-bottom: 5px;
    }  

    .btn-white {
      background-color: white;
      color: black;
      border: none;
      width: 100%;
      padding-top: 5px;
      margin-top: 7px;
      max-width: 428px;
      font-weight: 200;
      padding-bottom: 5px;
    }

    .btn-black {
      background-color: black;
      font-weight: 200;
      width: 100%;
      color: white;
      border: none;
      max-width: 428px;
      padding-top: 5px;
      margin-top: 7px;
      padding-bottom: 5px;
      border: 1px solid white;
    }
  }

 @media screen and (min-width: 320px) {
    flex-direction: column;
    padding-bottom: 150px;
    padding-top: 80px;
  }

  input[type] {
    width: 100%;
  }
}

@media screen and (min-width: 768px) {
  flex-direction: row;
  justify-content: center;
  justify-content: space-around;
  padding-top: 200px;
}

.login-container {
  align-self: flex-start;
}
`