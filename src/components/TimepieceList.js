import React from 'react'
import Timepiece from './Timepiece'
import '../styles/index.css'
import styled from 'styled-components'
import { BsArrowRight } from 'react-icons/bs'
import { Route } from 'react-router-dom'
import { useGlobalContext } from '../context'


const TimepieceList  = () => { 
  const { products } = useGlobalContext()

    return (
        <Section>
          <h1 className='timepieceList__heading'>Timepieces</h1>
           <div className='timepieceList'>
            <p style={{marginLeft:'20%', color: 'white', marginTop: '20px'}}>Shows 1 - 6 of 6 products</p>
             <Grid>
            {products.map((product) => {
              return (
                <Timepiece 
                  key={product.id}
                  product={product}
                />
              )
            })}
            </Grid>
            <div className="btn-container">
             <Route render ={({history}) => (
           <button className='checkout' onClick={() => history.push('./payment')}>
             Checkout  <BsArrowRight/></button>
             )}/>
            </div>
        </div>
      </Section>
    )
  }

  const Grid = styled.div`
    display: grid;
    background-color: black;
    font-family: var(--font-main);
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-auto-rows: 400px;
    max-width: 790px;
    grid-gap: 20px;
    margin: 0 auto;
  `
const Section = styled.section`
  margin: 20px;

.btn-container {
  display: flex;
  max-width: 790px;
  margin: 0 auto;
  justify-content: flex-end;
  padding-bottom: 100px;
}

.checkout {
    background-color: black;
    color: white;
    font-size: 14px;
    border: none;
    width: 180px;
    margin-top: 10px;
    padding: 8px;
    border: 1px solid white;
    text-align: center;
}

.checkout:hover {
  color: black;
  background-color: white;
  border: 1px solid black;
}
`
export default TimepieceList
