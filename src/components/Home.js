import React from 'react'
import '../styles/index.css'
import styled from 'styled-components'

const Home = () => {
  return (
    <HomeSection>
      <article className='home__logo-wrapper'>
        <img className='logo' style={{filter: 'brightness(0) invert(1)'}} src="https://cdn.shopify.com/s/files/1/2293/1277/files/TEST_IMAGE_d677443f-5916-4b2d-a772-eef1bf5b2cf2_540x.png?v=1610412480" alt="sangin logo"/>
      </article>

    <HomeWrapper>
      <Card>
        <img src="https://cdn.shopify.com/s/files/1/2293/1277/files/TEST_IMAGE_1_360x.jpg?v=1610397995" alt=""/>
          <h2 className='home__text-heading'>BRILLIANCE IN BASICS</h2>
            <p className='home__text'>Purpose built timepieces. Sangin Instruments’ watches are simple, functional, and reliable. Looking good no matter what the occasion. Each timepiece is designed, prototyped, tested and inspected in California by two people who are focused on bringing you the brillance in the basics.</p>
        </Card>

      <Card>
        <img src="https://cdn.shopify.com/s/files/1/2293/1277/files/test_image_2_b84c169f-42ea-4caa-a3a2-e729759d204b_360x.jpg?v=1610397726" alt=""/>
        <h2 className='home__text-heading'>SELECTION IS CONTINUOUS</h2>
          <p className='home__text'>Spending our time in Marine Special Operations we found that everyday you had to be better than the last. We bring this same mindset to our timepieces. Every model and every timepiece must be better than the last. Our customers are our friends and peers, they deserve the best product possible.</p>
      </Card>
      
     <Card>
        <img src="https://cdn.shopify.com/s/files/1/2293/1277/files/TEST_IMAGE_3_360x.jpg?v=1610398124" alt=""/>
        <h2 className='home__text-heading'>LIMITED RUNS</h2>
        <p className='home__text'>We pride ourselves on small batch production so we can focus on the finest details. Our interaction with our customers is vital to our developing the best timepieces and accessories. Please sign up today to get involved with our small community of adventures and collectors.</p>
      </Card>
   </HomeWrapper>
  </HomeSection>
  )
}

const HomeSection= styled.section`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  background-color: #000;
  padding-bottom: 180px;

  .home__logo-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;

@media screen and (min-width: 320px) {
  .logo {
    width: 280px;
  }
}

@media screen and (min-width: 768px) {
  flex-direction: row;
  }
}
`
const Card = styled.article`
  padding-top: 10px;
  padding-bottom: 40px;
  margin: 0 auto;
  text-align: center;
  width: 100%;
  max-width: 500px;

.home__text-heading {
  color: gray;
  margin-top: 10px;
  font-size: 18px;
}

.home__text {
  margin-top: 10px;
  color: var(--clr-gray-font);
  font-weight: 200;
  font-size: 14px;
}

 @media screen and (min-width: 320px) {
   img {
    max-width: 300px;
  }
}

  @media screen and (min-width: 768px) {
   img {
     max-width: 250px;
   }
  }

    @media screen and (min-width: 996px) {
    img {
      max-width: 300px;
    }
  }
`

const HomeWrapper = styled.div`
  margin: 0 auto;
  width: 100%;

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    grid-auto-rows: 450px;
    padding-bottom: 100px;
    padding-bottom: 0;
  }
`
export default Home
