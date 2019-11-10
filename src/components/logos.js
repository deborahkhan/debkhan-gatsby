import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from "styled-components"
import TextWrapper from "../components/text-wrapper"
import SubTitle from "../components/subtitle"

const LogoWrap = styled.div`
  display: grid;
  grid-gap: 10px 40px;
  grid-template-columns: repeat(1, 1fr);

  @media screen and (min-width: 400px) and (max-width: 599px) {
    grid-template-columns: repeat(2, 1fr);    
  }

  @media screen and (min-width: 600px) and (max-width: 899px) {
    grid-template-columns: repeat(4, 1fr);    
  }

  @media screen and (min-width: 900px) {
    grid-template-columns: repeat(6, 1fr);    
  }
`;

const Logos = () => (
  <StaticQuery
    query={graphql`
      query allimgQuery {
        source: allFile(filter: { absolutePath: { regex: "/logos/" } }) {
          edges {
            node {
              childImageSharp {
                fluid(maxWidth: 121) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data => (

      <div>

        <SubTitle>
          Clients include:
        </SubTitle>

        <TextWrapper>
          <LogoWrap>
            {data.source.edges.map(({ node }, i) => (
              <div>
                <Img key={i} fluid={node.childImageSharp.fluid} />
              </div>
            ))}
          </LogoWrap>
        </TextWrapper>

      </div>
    )}
  />
)
export default Logos