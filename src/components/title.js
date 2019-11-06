import styled from "styled-components"
import theme from "../theme"

export default styled.header `
  background-color: ${props => (props.background ? "pink" : "yellow")};
  font-family: ${theme.font.light}; 
`