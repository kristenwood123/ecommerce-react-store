import React, { useState } from 'react'
import Timepiece from './Timepiece'
import { storeTimepieces } from '../data'
import '../styles/TimepiecesList.css'
import { ProductConsumer } from '../context'

const TimepieceList  = () => {
  const [products, setproducts] = useState(storeTimepieces)

  
    console.log(products)
    return (
      <React.Fragment> 
        <div className='TimepieceList'>
          <p className='TimepieceList__heading'>Timepieces</p>
          <div className="TimepieceList__container">
        <ProductConsumer>
          {(hello) => {
              return <h1>{hello}</h1>
          }}
        </ProductConsumer>
          </div>
        </div> 
      </React.Fragment>

      
      //   <Timepiece />
      // </div>
    )
  }


export default TimepieceList
