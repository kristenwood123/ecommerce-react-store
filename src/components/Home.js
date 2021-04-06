import React from 'react'
import '../styles/index.css'

const Home = () => {
  return (
    <section className='home'>
      <div className="home__container">
      <article className='home__logo-wrapper'>
        <img src="https://cdn.shopify.com/s/files/1/2293/1277/files/TEST_IMAGE_d677443f-5916-4b2d-a772-eef1bf5b2cf2_540x.png?v=1610412480" alt="sangin logo"/>
      </article>

    <div className="home__wrapper">
      <article className="home__card">
        <img src="https://cdn.shopify.com/s/files/1/2293/1277/files/TEST_IMAGE_1_360x.jpg?v=1610397995" alt=""/>
          <h2 className='home__text-heading'>BRILLIANCE IN BASICS</h2>
            <p className='home__text'>Purpose built timepieces. Sangin Instruments’ watches are simple, functional, and reliable. Looking good no matter what the occasion. Each timepiece is designed, prototyped, tested and inspected in California by two people who are focused on bringing you the brillance in the basics.</p>
        </article>

      <article className="home__card">
        <img src="https://cdn.shopify.com/s/files/1/2293/1277/files/test_image_2_b84c169f-42ea-4caa-a3a2-e729759d204b_360x.jpg?v=1610397726" alt=""/>
        <h2 className='home__text-heading'>SELECTION IS CONTINUOUS</h2>
          <p className='home__text'>Spending our time in Marine Special Operations we found that everyday you had to be better than the last. We bring this same mindset to our timepieces. Every model and every timepiece must be better than the last. Our customers are our friends and peers, they deserve the best product possible.</p>
      </article>
      
     <article className="home__card">
        <img src="https://cdn.shopify.com/s/files/1/2293/1277/files/TEST_IMAGE_3_360x.jpg?v=1610398124" alt=""/>
        <h2 className='home__text-heading'>LIMITED RUNS</h2>
        <p className='home__text'>We pride ourselves on small batch production so we can focus on the finest details. Our interaction with our customers is vital to our developing the best timepieces and accessories. Please sign up today to get involved with our small community of adventures and collectors.</p>
      </article>
    </div>
</div>
  </section>
  )
}

export default Home
