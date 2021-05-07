import React, { useEffect } from 'react'
import Timepiece from './Timepiece'
import '../styles/index.css'
import styled from 'styled-components'
import { useGlobalContext } from '../context'


const TimepieceList  = () => { 
  const { products } = useGlobalContext()

    return (
        <section className='TimepieceList' style={{margin: '20px'}}>
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
        </div>
      </section>
    )
  }

  const Grid = styled.div`
    display: grid;
    background-color: black;
    font-family: var(--font-main);
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-auto-rows: 400px;
    padding-bottom: 100px;
    max-width: 790px;
    grid-gap: 20px;
    margin: 0 auto;
  `

export default TimepieceList
