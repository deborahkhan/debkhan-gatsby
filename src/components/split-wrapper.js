import styled from "styled-components"
import theme from "../theme"

export default styled.div `

  @media screen and (min-width: 576px) {
    display: flex;
    margin-left: -${theme.columnGap.small};
    margin-right: -${theme.columnGap.small};
  }

  margin-bottom: ${props => props.margin ? "3.75rem" : "0"};

`