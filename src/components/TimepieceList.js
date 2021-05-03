import React from 'react'
import Timepiece from './Timepiece'
import data from '../data'
import '../styles/index.css'


const TimepieceList  = ({onAdd}) => { 
  const { products } = data; 
 
    return (
      <React.Fragment> 
          <h1 className='timepieceList__heading'>Timepieces</h1>
           <div className='timepieceList'>
            {products.map((product) => {
              return (
                <Timepiece 
                  key={product.id}
                  product={product}
                  onAdd={onAdd}
                />
              )
            })}
        </div>
      </React.Fragment>  
    )
  }


export default TimepieceList
