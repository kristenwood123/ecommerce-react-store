import styled from "styled-components"

export const Grid = styled.div`
    display: grid;
    background-color: black;
    font-family: var(--font-main);
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-auto-rows: 400px;
    max-width: 790px;
    grid-gap: 20px;
    margin: 0 auto;
  `
export const Section = styled.section`
  margin: 20px;

.btn-container {
  display: flex;
  max-width: 790px;
  margin: 0 auto;
  justify-content: flex-end;
  padding-bottom: 100px;
}

.checkout {
    background-color: black;
    color: white;
    font-size: 14px;
    border: none;
    width: 180px;
    margin-top: 10px;
    padding: 8px;
    border: 1px solid white;
    text-align: center;
}

.checkout:hover {
  color: black;
  background-color: white;
  border: 1px solid black;
}
`