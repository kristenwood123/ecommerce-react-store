import React from 'react'
import { HomeSection, HomeWrapper, Card } from '../styles/Home.styles'
import coverImage from '../images/coverImage.jpeg'

const Home = () => {
  return (
    <HomeSection>
      <img className='hero-image' src={coverImage} alt="cover image" />
    <HomeWrapper>

      <Card>
        <h2 className='home__text-heading'>BRILLIANCE IN THE BASICS</h2>
          <p className='home__text'>
              Purpose built timepieces. Sangin Instruments’ watches are simple, functional, and reliable. Looking good no matter what the occasion. Each timepiece is designed, prototyped, tested and inspected in California by two people who are focused on bringing you the brilliance in the basics.</p>
          <button className="checkout explore" id="explore">Explore</button>
      </Card>
   </HomeWrapper>
  </HomeSection>
  )
}


export default Home
