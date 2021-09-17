import styled from 'styled-components'

export const HomeSection = styled.section`
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
export const Card = styled.article`
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