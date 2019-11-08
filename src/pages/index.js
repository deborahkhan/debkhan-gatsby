import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import TextWrapper from "../components/text-wrapper"
import SplitWrapper from "../components/split-wrapper"
import SplitItem from "../components/split-item"
import Grid from "../components/grid-wrapper"
import GridItem from "../components/grid-item"
import SubTitle from "../components/subtitle"
import styled from "styled-components"
import theme from "../theme"

const HeadShotImg = styled(Img)`
  flex-grow: 1;
  box-shadow: ${theme.boxShadow.regular}; 
`

const IndexPage = ( { data } ) => (
  <Layout>
    <SEO title="Deb Khan - Creative inspiration, delivering business growth differently" />

    <TextWrapper margin>
      <h1>Creative inspiration, <br /> delivering business growth differently.</h1>
    </TextWrapper>

    <SubTitle>
      What I do:
    </SubTitle>

    <SplitWrapper margin>
      <SplitItem>
        <TextWrapper>
          <p>I love partnering with remarkable teams - helping them win more work, tell their story and flourish. I make work more effective and more enjoyable.</p>
          <p>I partner with a wide range of outstanding creative companies, but they all share one thing – they recognise they need help to go to the next level. I bring what I have learned working with and alongside some outstanding organisations.</p>
          <p>I develop skills, design solutions and unlock creativity for cultural transformation, performance and business growth.</p>
          <p>I established my business in 1998, developing a new fast, flexible offer to drive growth, delivered with a combination of Yorkshire directness, enthusiasm and humour.</p>
          <Link>Read more about me ></Link>
        </TextWrapper>
      </SplitItem>
      <SplitItem>
        <HeadShotImg
          fluid={data.imgHeadshot.childImageSharp.fluid}
          alt="Deb Khan"
        />
      </SplitItem>
    </SplitWrapper>

    <SubTitle>
      In the last 3 years I have:      
    </SubTitle>

    <Grid>

      <GridItem>
        <TextWrapper>
          <p>Guided the luxury brands Orlebar Brown, Annoushka Jewellery and Lucas Hugh to define a distinctive brand position, direction &amp; story, one leading to acquisition by Chanel</p>
        </TextWrapper>
      </GridItem>

      <GridItem>
        <TextWrapper>
          <p>Worked with small architecture practices Tate Harmer, Cousins and Cousins, MIkhail Riches, and William Mathhews  to win competitions build spends of over £500 million - worked on the brief, the design of the narrative and the pitch and guided one to be 2019 favourite for The Stirling Prize</p>
        </TextWrapper>
      </GridItem>

      <GridItem>
        <TextWrapper>
          <p>Helped the managers at King.com, makes of Candy Crush be even more effective &amp; lead conversations about performance</p>
        </TextWrapper>
      </GridItem>

      <GridItem>
        <TextWrapper>
          <p>Supported the top global creative agency Mother to help their teams be more productive, creative &amp; effective </p>
        </TextWrapper>
      </GridItem>

      <GridItem>
        <TextWrapper>
          <p>Steered Parkinson’s UK to lead with rigour &amp; purpose though a change management programme</p>
        </TextWrapper>
      </GridItem>

      <GridItem>
        <TextWrapper>
          <p>Designed a comms plan for innovative mixed use building scheme in London including a new church, secondary school, shops &amp; 150 new homes</p>
        </TextWrapper>
      </GridItem>

      <GridItem>
        <TextWrapper>
          <p>Cycled 5600m from Siena to Rome in 3 days 50 senior women in the property industry and raised over £2500 for Coram Foundation  </p>
        </TextWrapper>
      </GridItem>

      <GridItem>
        <TextWrapper>
          <p>Steered Mikhail Riches - a design driven architecture practice to win The Stirling Prize - awarded for the first 100% council house project in history</p>
        </TextWrapper>
      </GridItem>

      <GridItem>
        <TextWrapper>
          <p>Taken a 3 day week role as VP Culture at Kano (present)</p>
        </TextWrapper>
      </GridItem>

      <GridItem>
        <TextWrapper>
          <p>Trained over 500 people to present with impact, sell in ideas, network and influence</p>
        </TextWrapper>
      </GridItem>

      <GridItem>
        <TextWrapper>
          <p>Written a fantastic book, She’s Back shortlisted for CMI Management Book of the Year 2019 endorsed  by Arianna Huffington</p>
        </TextWrapper>
      </GridItem>

      <GridItem>
        <TextWrapper>
          <p>Shaped wow comms by designing effective newsletters, events, films &amp;  copy including for design firms, structural engineers and charotes</p>
        </TextWrapper>
      </GridItem>

      <GridItem>
        <TextWrapper>
          <p>Designed &amp; delivered effective, practical management learning &amp; development programmes for a data company &amp; a digital ad agency </p>
        </TextWrapper>
      </GridItem>

      <GridItem>
        <TextWrapper>
          <p>Partnered with The International School of the Year British School Muscat to deliver a growth plan</p>
        </TextWrapper>
      </GridItem>

      <GridItem>
        <TextWrapper>
          <p>Featured as a writer for GQ (UK) and Strategy+Business (global)</p>
        </TextWrapper>
      </GridItem>                                                                              
      


    </Grid>

  </Layout>
)


export const query = graphql`
  query {  
    imgHeadshot: file(relativePath: { eq: "deb_khan_headhsot.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 517) {
          ...GatsbyImageSharpFluid
        }
      }
    }              
  } 
`

export default IndexPage
