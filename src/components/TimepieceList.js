import React from 'react'
import Timepiece from './Timepiece'
import '../styles/TimepiecesList.css'
import { ProductConsumer } from '../context'

const TimepieceList  = () => {
  
    return (
      <React.Fragment> 
        <div className='TimepieceList'>
          <p className='TimepieceList__heading'>Timepieces</p>
          <div className="TimepieceList__container">
        <ProductConsumer>
          {(value) => {
              return value.products.map( product => {
                return <Timepiece 
                  key={product.id}
                  product={product}
                />
              })
          }}
      
        </ProductConsumer>
          </div>
        </div> 
       
      </React.Fragment>
      // </div>
    )
  }


export default TimepieceList
