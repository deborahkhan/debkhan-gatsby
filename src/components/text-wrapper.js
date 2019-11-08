import styled from "styled-components"
import theme from "../theme"

export default styled.div `
  background-color: ${theme.color.white}; 
  padding: 2.5rem;
  box-shadow: ${theme.boxShadow.regular}; 
  margin-bottom: ${props => props.margin ? "3.75rem" : "0"};
  max-width: ${props => props.shorter ? "815px" : "100%"};

  h1 {
    margin-bottom: 0;
  }
`