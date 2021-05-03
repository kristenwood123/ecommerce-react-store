import React from 'react'
import Timepiece from './Timepiece'
import data from '../data'
import '../styles/index.css'



const TimepieceList  = () => { 
  const { products } = data; 

    return (
        <>
          <h1 className='timepieceList__heading'>Timepieces</h1>
           <div className='timepieceList'>
            {products.map((product) => {
              return (
                <Timepiece 
                  key={product.id}
                  product={product}
                />
              )
            })}
        </div>
      </>
    )
  }


export default TimepieceList
