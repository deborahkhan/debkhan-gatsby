import styled from "styled-components"
import theme from "../theme"

export default styled.div `

  @media screen and (min-width: 700px) {
    columns: 2;
    column-gap: ${theme.columnGap.regular};
    margin-bottom: ${props => props.margin ? ".75rem" : "0"};
  }

  margin-bottom: ${props => props.margin ? "3.75rem" : "0"};
`