import styled from "styled-components"
import theme from "../theme"

export default styled.div `
  display: flex;
  margin: 0 -${theme.columnGap.small};
  margin-bottom: ${props => props.margin ? "3.75rem" : "0"};
`