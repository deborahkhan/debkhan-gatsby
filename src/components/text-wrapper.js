import styled from "styled-components"
import theme from "../theme"

export default styled.div `
  @media screen and (min-width: 576px) {
    padding: ${props => props.padded ? "2.5rem" : "1.688rem"};
  }

  padding: 1.688rem;
  background-color: ${theme.color.white}; 
  box-shadow: ${theme.boxShadow.regular}; 
  margin-bottom: ${props => props.margin ? "5.75rem" : "0"};
  max-width: ${props => props.shorter ? "815px" : "100%"};

  h1 {
    margin-bottom: 0;
    line-height: 1.4;
    letter-spacing: 1px;
    
    @media screen and (max-width: 575px) {
      font-size: ${theme.fontSize.medium};
    }
  }
`