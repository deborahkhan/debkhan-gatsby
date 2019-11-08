/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import theme from "../theme"
import TextWrapper from "../components/text-wrapper"
import { createGlobalStyle } from "styled-components"
import styled from "styled-components"

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${theme.color.ash};
    padding: 0 30px;
  }

  a {
    transition: all 0.2s linear;
  }

  a:link, a:visited {
    color: ${theme.color.black};
  }
  a:hover, a:active, a:focus {
    color: ${theme.color.hover};
  }
`
const SiteFooter = styled.footer`
  margin: 3.75rem 0;
  display: flex;
  justify-content: space-between;
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <GlobalStyle />
      
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 1070,
        }}
      >
        <Header siteTitle={data.site.siteMetadata.title} />

        <TextWrapper margin>
          <h1>Creative inspiration, <br /> delivering business growth differently.</h1>
        </TextWrapper>

        <main>{children}</main>
        
        <SiteFooter>          
          <small>
            &copy; {new Date().getFullYear()} {data.site.siteMetadata.title}
          </small>
          <small>
            Site by <a rel="noopener noreferrer" target="_blank" href="https://backtofront.co">Back to Front</a>
          </small>  
        </SiteFooter>

      </div>
      
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
