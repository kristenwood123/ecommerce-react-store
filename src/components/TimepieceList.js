import React from 'react'
import Timepiece from './Timepiece'
import { BsArrowRight } from 'react-icons/bs'
import { Route } from 'react-router-dom'
import { useGlobalContext } from '../context'
import { Grid, Section } from '../styles/TimepieceList.styles'


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

  
export default TimepieceList
