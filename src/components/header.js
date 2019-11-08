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
  padding: 4.063rem 0 1.563rem;

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
        <Link to="">
          <FontAwesomeIcon icon={faEnvelope} />
        </Link>
      </li>
      <li>
        <Link to="">
          <FontAwesomeIcon icon={faLinkedin} />
        </Link>
      </li>
      <li>
        <Link to="">
          <FontAwesomeIcon icon={faTwitter} />
        </Link>
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
