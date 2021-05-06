import React from 'react'
import Timepiece from './Timepiece'
import '../styles/index.css'
import styled from 'styled-components'
import { useGlobalContext } from '../context'


const TimepieceList  = () => { 
  const { products } = useGlobalContext()

    return (
        <>
          <h1 className='timepieceList__heading'>Timepieces</h1>
          <p style={{marginLeft: '200px'}}>Shows 1 - 6 of 6 products</p>
           <div className='timepieceList'>
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
      </>
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
  `

export default TimepieceList
