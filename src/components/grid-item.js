import styled from "styled-components"
import theme from "../theme"

export default styled.div `

  @media screen and (min-width: 700px) {
    margin: 0 0 2rem 0;
  }

  &:not(:last-child) {
    @media screen and (max-width: 699px) {
        margin-bottom: ${theme.columnGap.regular};
    }
  }

  display: inline-block;
  width: 100%;

`