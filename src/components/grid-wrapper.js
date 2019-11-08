import styled from "styled-components"
import theme from "../theme"

export default styled.div `

  @media screen and (min-width: 576px) {
    columns: 2;
    column-gap: ${theme.columnGap.regular};
  }
`