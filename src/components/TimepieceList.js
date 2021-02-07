import React from 'react'
import Timepiece from './Timepiece'
import '../styles/TimepiecesList.css'

class TimepieceList extends React.Component {
  state = {
    products: []
  }

  render() {
    return (
      <React.Fragment> 
        <div className='TimepieceList'>
          <p className='TimepieceList__heading'>Timepieces</p>
          <div className="TimepieceList__container">

          </div>
        </div> 
      </React.Fragment>

      
      //   <Timepiece />
      // </div>
    )
  }
}

export default TimepieceList
