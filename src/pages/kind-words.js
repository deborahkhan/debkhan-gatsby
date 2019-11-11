import React from "react"
import SubTitle from "../components/subtitle"
import Layout from "../components/layout"
import SEO from "../components/seo"
import TextWrapper from "../components/text-wrapper"
import Grid from "../components/grid-wrapper"
import GridItem from "../components/grid-item"
import Logos from "../components/logos"

const KindWords = () => (
  <Layout>
    <SEO 
      title="Kind Words" 
      description="Clients from Mother, Mikhail Riches and Facebook tell their stories about working with Deb Khan"
    />

    <SubTitle>
      Kind words
    </SubTitle>

    <Grid margin>
      <GridItem>
        <TextWrapper>
          <blockquote>
            <p>"I relished working with Deb to create a bespoke training approach for Mother targeting our two big asks around productivity and negotiation skills, or as we called them, getting shit done and getting your way. My delight continued throughout the training itself; Deb is dynamic, inspiring yet very firm and brought the best out of everyone in each session. From a personal perspective, Deb and her She’s Back work are an inspiration to me and Mother - we’ve been delighted to support her and Lisa here too."</p>
            <cite>Katie Mackay-Sinclair<br />Partner, Mother London</cite>
          </blockquote>
        </TextWrapper>
      </GridItem>

      <GridItem>
        <TextWrapper>
          <blockquote>
            <p>"I always thought that Deb Khan was our secret weapon, giving us the edge over our competitors and helping us win work. I’m loathe to give her a good review in case everyone else finds out how completely brilliant she is."</p>
            <cite>Annalie Riches <br />Founder, Mikhail Riches</cite>
          </blockquote>
        </TextWrapper>
      </GridItem>

      <GridItem>
        <TextWrapper>
          <blockquote>
            <p>"We worked with Deb for many years, as Zone grew from a small creative agency to become the biggest independent digital specialist in the UK.  As we grew, our people needed to grow too – and Deb helped us build several generations of managers with the skills to navigate that change.  Deb’s training and coaching received great feedback from participants over many years, and undoubtedly helped us retain talent in a highly competitive market"</p>
            <cite>Jon Davie <br />Chief Client Officer, Zone</cite>
          </blockquote>
        </TextWrapper>
      </GridItem>

      <GridItem>
        <TextWrapper>
          <blockquote>
            <p>"Deb is a rock star! If you're lucky enough that your paths cross you'll leave enriched and empowered to create an even bigger and better things."</p>
            <cite>Alastair Cotterill <br />Creative Product Strategist, Facebook</cite>
          </blockquote>
        </TextWrapper>
      </GridItem>

    </Grid>

    <Logos />

  </Layout>
)

export default KindWords
