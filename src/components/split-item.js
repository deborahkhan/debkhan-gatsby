import styled from "styled-components"
import theme from "../theme"

export default styled.div `

  @media screen and (min-width: 576px) {
    display: ${props => props.flexHeight ? "flex" : "block"};
    flex: 1 0 45%;
    margin-left: ${theme.columnGap.small};
    margin-right: ${theme.columnGap.small};
  }
`