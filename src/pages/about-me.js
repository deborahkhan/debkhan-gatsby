import React from "react"
import SubTitle from "../components/subtitle"
import Layout from "../components/layout"
import SEO from "../components/seo"
import TextWrapper from "../components/text-wrapper"
import Logos from "../components/logos"

const AboutMe = () => (
  <Layout>
    <SEO
      title="About me" 
      description="I combine creative and strategic thinking, writing, training, coaching, communications, storytelling, film making, PR, marketing and facilitation"
    />

    <SubTitle>
      About me
    </SubTitle>

    <TextWrapper shorter margin>
      <p>I combine creative and strategic thinking, writing, training, coaching, communications, storytelling, film making, PR, marketing and facilitation.</p>
      <p>My background is in the creative industries including working at as a director and workshop leader National Theatre and The Royal Opera House. I also worked as a successful senior teacher.</p>
      <p>I have creativity as my centre of gravity and have developed a formidable network of brilliant management consultants, film makers, designers, web developers, social media managers etc who I draw on for projects.</p>
      <p>I’m the mother of two teenage sons and live in London</p>
      <p>I am the co-founder and co-author of <a rel="noopener noreferrer" target="_blank" href="https://www.shesback.co.uk/">She's Back</a> nominated for CMI Management Book of the Year 2019</p>
    </TextWrapper>

    <Logos />

  </Layout>
)

export default AboutMe
