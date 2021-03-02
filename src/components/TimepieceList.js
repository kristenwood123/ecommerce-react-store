import React, { useState } from 'react'
import Timepiece from './Timepiece'
import data from '../data'
import '../styles/TimepiecesList.css'


const TimepieceList  = () => { 
  const { products } = data; 
 
    return (
      <React.Fragment> 
        <div className='TimepieceList'>
          <p className='TimepieceList__heading'>Timepieces</p>
          <div className="TimepieceList__container"></div>
        {products.map((product) => {
          return (
            <Timepiece 
              key={product.id}
              product={product}
            />
          )
        })}
          </div>
      </React.Fragment>
     
    )
  }


export default TimepieceList
