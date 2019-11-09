import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"
import theme from "../theme"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons"

const HeaderWrap = styled.header`
  display: flex;
  justify-content: space-between;
  padding-bottom: 1.563rem;
  padding-top: 2rem;

  @media screen and (min-width: 576px) {
    padding-top: 4.063rem 
  }

  h1 {
   font-size: ${theme.fontSize.medium};
    margin: 0;
  }
`;

const LinksList = styled.ul`
  list-style: none;
  margin: 0;
  
  li {
    display: inline-block;
    margin-left: 10px;
  }
`;

const Header = ({ siteTitle }) => (

  <HeaderWrap>

    <h1>
      <Link to="/">
        {siteTitle}
      </Link>
    </h1>

    <LinksList>
      <li>
        <a rel="noopener noreferrer" target="_blank" href="mailto:">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </li>
      <li>
        <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/deborah-khan-8b349014/">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </li>
      <li>
        <a rel="noopener noreferrer" target="_blank" href="https://twitter.com/debkhan">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </li>
    </LinksList>
    
  </HeaderWrap>

)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
