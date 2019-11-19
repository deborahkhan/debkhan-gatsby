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
import TextSplit from "../components/text-split"
import Logos from "../components/logos"

const HeadShotImg = styled(Img)`
  flex-grow: 1;
  box-shadow: ${theme.boxShadow.regular}; 
`
const MobileKindWords = styled.div`

  margin-bottom: 3.75rem;
  margin-top: -3rem;

  @media screen and (min-width: 1000px) {
      display: none;
    }
`

const KindWords = styled.div`
  @media screen and (max-width: 999px) {
      display: none;
    }
`

const IndexPage = ( { data } ) => (
  <Layout>
    <SEO 
      title="Deb Khan - Creative inspiration, delivering business growth differently" 
      description="I love partnering with remarkable teams - helping them win more work, tell their story and flourish"
    />

    <SubTitle>
      What I do
    </SubTitle>

    <SplitWrapper margin>
      <SplitItem>
        <TextWrapper>
          <p>I love partnering with remarkable teams - helping them win more work, tell their story and flourish. I make work more effective and more enjoyable.</p>
          <p>I partner with a wide range of outstanding creative companies, but they all share one thing – they recognise they need help to go to the next level. I bring what I have learned working with and alongside some outstanding organisations.</p>
          <p>I develop skills, design solutions and unlock creativity for cultural transformation, performance and business growth.</p>
          <p>I established my business in 1998, developing a new fast, flexible offer to drive growth, delivered with a combination of Yorkshire directness, enthusiasm and humour.</p>
          <Link to="about-me">Read more about me ></Link>
        </TextWrapper>
      </SplitItem>
      <SplitItem flexHeight>
        <HeadShotImg
          fluid={data.imgHeadshot.childImageSharp.fluid}
          alt="Deb Khan"
        />
      </SplitItem>
    </SplitWrapper>

    <SubTitle>
      In the last 3 years I have
    </SubTitle>

    <Grid margin>

      <GridItem>
        <TextWrapper>
          <p>Guided the luxury brands Orlebar Brown, Annoushka Jewellery and Lucas Hugh to define a distinctive brand position, direction and story, one leading to acquisition by Chanel</p>
        </TextWrapper>
      </GridItem>

      <GridItem>
        <TextWrapper>
          <p>Worked with architect practices Tate Harmer, Cousins and Cousins, Mikhail Riches and William Matthews to win competitions build spends of over £300 million - worked on the brief, the design of the narrative and the pitch and guided one to be 2019 favourite for The Stirling Prize</p>
        </TextWrapper>
      </GridItem>

      <GridItem>
        <TextWrapper>
          <p>Helped the managers at King.com, makers of Candy Crush be even more effective and lead conversations about performance working across four countries</p>
        </TextWrapper>
      </GridItem>

      <GridItem>
        <TextWrapper>
          <p>Supported the top global creative agency Mother to help their teams be more productive, creative and effective</p>
        </TextWrapper>
      </GridItem>

      <GridItem>
        <TextWrapper>
          <p>Steered Parkinson’s UK to lead with rigour and purpose through a change programme</p>
        </TextWrapper>
      </GridItem>

      <GridItem>
        <TextWrapper>
          <p>Designed a comms plan for innovative mixed use building scheme in London including a new church, secondary school, shops and 150 new homes</p>
        </TextWrapper>
      </GridItem>

      <GridItem>
        <TextWrapper>
          <p>Cycled 5600m from Siena to Rome in 3 days 50 senior women in the property industry and raised over £2500 for Coram Foundation</p>
        </TextWrapper>
      </GridItem>

      <GridItem>
        <TextWrapper>
          <p>Taken a 3 day week global role as VP Culture at Kano (present)</p>
        </TextWrapper>
      </GridItem>

      <GridItem>
        <TextWrapper>
          <p>Steered Mikhail Riches - a design driven architecture practice to win The Stirling Prize - awarded for the first 100% council house project in history</p>
        </TextWrapper>
      </GridItem>

      <GridItem>
        <TextWrapper>
          <p>Trained over 500 people to present with impact, sell in ideas, network and influence</p>
        </TextWrapper>
      </GridItem>

      <GridItem>
        <TextWrapper>
          <p>Written a fantastic book, <a rel="noopener noreferrer" target="_blank" href="https://www.amazon.co.uk/Shes-Back-Your-guide-returning/dp/1911583565">She's Back</a>, shortlisted for CMI Management Book of the Year 2019 endorsed by Arianna Huffington</p>
        </TextWrapper>
      </GridItem>

      <GridItem>
        <TextWrapper>
          <p>Shaped wow comms by creating films, newsletters, and events including a <a rel="noopener noreferrer" target="_blank" href="http://www.mikhailriches.com/">practice film for Mikhail Riches</a> and this <a href="https://www.youtube.com/watch?v=zGHfzvcA8iQ">animation for She's Back</a></p>
        </TextWrapper>
      </GridItem>

      <GridItem>
        <TextWrapper>
          <p>Designed and delivered effective, practical management learning and development programmes for a data company and a digital ad agency</p>
        </TextWrapper>
      </GridItem>

      <GridItem>
        <TextWrapper>
          <p>Partnered with The International School of the Year, The British School Muscat to deliver a growth plan over two years</p>
        </TextWrapper>
      </GridItem>

      <GridItem>
        <TextWrapper>
          <p>Featured as a writer for GQ (UK) and Strategy+Business (global)</p>
        </TextWrapper>
      </GridItem>
      
    </Grid>

    <TextSplit>
      <SubTitle>
        <Link to="kind-words">Kind Words</Link>
      </SubTitle>

      <KindWords>
        <Link to="kind-words">More kind Words ></Link>
      </KindWords>
    </TextSplit>

    <SplitWrapper margin>
      <SplitItem>
        <TextWrapper>
          <blockquote>
            <p>"I relished working with Deb to create a bespoke training approach for Mother targeting our two big asks around productivity and negotiation skills, or as we called them, getting shit done and getting your way. My delight continued throughout the training itself; Deb is dynamic, inspiring yet very firm and brought the best out of everyone in each session. From a personal perspective, Deb and her She’s Back work are an inspiration to me and Mother - we’ve been delighted to support her and Lisa here too."</p>
            <cite>Katie Mackay-Sinclair<br />Partner, Mother London</cite>
          </blockquote>
        </TextWrapper>
      </SplitItem>
      <SplitItem>
        <TextWrapper>
          <blockquote>
            <p>"We worked with Deb for many years, as Zone grew from a small creative agency to become the biggest independent digital specialist in the UK.  As we grew, our people needed to grow too – and Deb helped us build several generations of managers with the skills to navigate that change.  Deb’s training and coaching received great feedback from participants over many years, and undoubtedly helped us retain talent in a highly competitive market"</p>
            <cite>Jon Davie <br />Chief Client Officer, Zone</cite>
          </blockquote>
        </TextWrapper>
      </SplitItem>
    </SplitWrapper>

    <MobileKindWords>
      <Link to="kind-words">More kind Words ></Link>
    </MobileKindWords>

    <Logos />

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
