import styled from "styled-components"
import theme from "../theme"

export default styled.div `

  @media (min-width: 576px) {
    padding: 2.5rem;    
  }

  padding: 1.5rem;
  background-color: ${theme.color.white}; 
  box-shadow: ${theme.boxShadow.regular}; 
  margin-bottom: ${props => props.margin ? "3.75rem" : "0"};
  max-width: ${props => props.shorter ? "815px" : "100%"};

  h1 {
    margin-bottom: 0;
  }
`