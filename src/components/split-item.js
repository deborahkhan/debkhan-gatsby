import styled from "styled-components"
import theme from "../theme"

export default styled.div `
  display: ${props => props.flexHeight ? "flex" : "block"};
  flex: 1 0 45%;
  margin: 0 ${theme.columnGap.small};
`