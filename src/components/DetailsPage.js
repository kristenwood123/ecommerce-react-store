import React, { useState } from 'react'
import { useGlobalContext } from '../context'
import styled from 'styled-components'



const DetailsPage = () => {
  const { details } = useGlobalContext()
  const { img, price, title, info } = details

  return (
    <DetailsPageDiv>
      <img src={img} alt={title} />
      <WatchDetails>
        <h1>{title}</h1>
        <p className='info'>{info}</p>
        <p className='price'>Price: ${price}</p>
        <div className='btn-wrapper'>
          <button>Add to Cart</button>
          <button>Back to Watches</button>
        </div>
      </WatchDetails>
    </DetailsPageDiv>
  )
}

const DetailsPageDiv = styled.div`
padding-top: 100px;
padding-bottom: 150px;
margin: 0 auto;
display: flex;
color: white;
height: 100%;

 @media screen and (min-width: 320px) {
   flex-direction: column;
   align-items: center;
    img { 
      width: 300px;
      height: 300px;
    }

    @media screen and (min-width: 768px) {
      flex-direction: row;
      justify-content: center;
    }

    .info { 
      max-width: 550px;
      align-text: center;
    }
  }
`

const WatchDetails = styled.div`
padding-top: 30px;

@media screen and (min-width: 320px) {
  .info {
    margin-left: 10px;
    margin-right: 10px;
    font-size: 14px;
    max-width: 500px;
  }

  .price { 
    text-align: center;
  }
}
.btn-wrapper {
  display: flex;
  margin: 0 auto;
  justify-content: center;
  justify-content: space-around;
}

button {
    background-color: black;
    color: white;
    font-size: 14px;
    border: none;
    width: 150px;
    margin-top: 10px;
    padding: 5px;
    border: 1px solid white;
    text-align: center;
}

button:hover {
  color: black;
  background-color: white;
  border: 1px solid black;
}
`


export default DetailsPage
