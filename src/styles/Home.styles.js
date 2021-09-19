import styled from 'styled-components'

export const HomeSection = styled.section`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  background-color: #000;
  padding-bottom: 180px;

    -webkit-animation: fadein 2.5s; /* Safari, Chrome and Opera > 12.1 */
       -moz-animation: fadein 2.5s; /* Firefox < 16 */
        -ms-animation: fadein 2.5s; /* Internet Explorer */
         -o-animation: fadein 2.5s; /* Opera < 12.1 */
            animation: fadein 2.5s;

@keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

.learn {
  position: absolute;
  text-transform: uppercase;
  font-size: 20px;
  font-weight: 200;
  width: 200px;
  padding: 10px;
  border: 1px solid white;
  color: white;
  background-color: transparent;
  bottom: 20rem;
  right: 20rem;
}

.btn-holder {
  position: relative;
}

.hero-image {
  width: 100%;
}

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
export const Card = styled.article`
  padding-top: 10px;
  padding-bottom: 40px;
  margin: 0 auto;
  text-align: center;
  width: 100%;
  max-width: 900px;

.home__text-heading {
  color: #fff;
  margin-top: 5rem;
  font-size: 20px;
  text-transform: uppercase;
  letter-spacing: 5px;
  font-weight: 200;
}

.home__text {
  margin: 1rem 2rem;
  color: #fff;
  font-weight: 200;
  font-size: 14px;
  line-height: 2rem;
}


#explore {
  text-transform: uppercase;
  font-size: 20px;
  font-weight: 200;
  width: 150px;
  padding: 10px;
  border: 1px solid white;
  background-color: black;
  color: white;
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

export const HomeWrapper = styled.div`
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