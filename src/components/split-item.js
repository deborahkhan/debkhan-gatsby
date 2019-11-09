import styled from "styled-components"
import theme from "../theme"

export default styled.div `

&:last-child {
  @media screen and (max-width: 999px) {
    margin-top: ${theme.columnGap.regular};
  }

}

  @media screen and (min-width: 1000px) {
    display: ${props => props.flexHeight ? "flex" : "block"};
    flex: 1 0 45%;
    margin-left: ${theme.columnGap.small};
    margin-right: ${theme.columnGap.small};
  }
`