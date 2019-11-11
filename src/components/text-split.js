import styled from "styled-components"
import theme from "../theme"

export default styled.div `

  margin-bottom: ${theme.columnGap.regular};
  
  @media screen and (min-width: 576px) {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 0;
  }

`