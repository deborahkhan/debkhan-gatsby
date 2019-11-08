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

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${theme.color.ash}; 
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
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
