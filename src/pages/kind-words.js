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
            <p>"Deb has been a fun and trusted partner for 3 years now. During this time she has helped us double the size of our company, dramatically improve our pitch win rate, and hugely improved the professional skills of our team. Deb has a brilliant way of understanding your narrative and how this can clarify the direction of your business. She is also very in tune with how to manage creativity which for us as an architecture practice is invaluable. I cannot recommend her highly enough she has transformed our work!"</p>
            <cite>Jerry Tate<br />Partner, Tate Harmer LLP</cite>
          </blockquote>
        </TextWrapper>
      </GridItem>

      <GridItem>
        <TextWrapper>
          <blockquote>
            <p>"Deb has this wonderful way to get to the nub of what you want to work through in a really enjoyable and insightful way that brings both the team and business as a whole along with it."</p>
            <cite>Adam Brown,<br />Founder, Orlebar Brown</cite>
          </blockquote>
        </TextWrapper>
      </GridItem>

      <GridItem>
        <TextWrapper>
          <blockquote>
            <p>"I asked Deb to help me develop my management team, set a vision for the agency and keep us human as we tried to deliver on an aggressive growth plan. So over the three or so years that we worked together we grew the agency topline by a compound rate of 68%, profit by a similar amount and came in the top quartile of Omnicom's global PWC Employee Engagement and Financial Performance study. So thank you Deb, for all your help and support."</p>
            <cite>Steven Hess<br />Founder, Weapon 7</cite>
          </blockquote>
        </TextWrapper>
      </GridItem>

      <GridItem>
        <TextWrapper>
          <blockquote>
            <p>"Deb has a great blend of agency experience, fantastic psychological insight and the amazing amount of knowledge of how to make both individuals and teams perform better. Crucially it's delivered with lots of tough love and a cracking sense of humour. I cannot recommend her enough."</p>
            <cite>Sean Singleton<br />MD, Your Favourite Story Digital Agency</cite>
          </blockquote>
        </TextWrapper>
      </GridItem>

      <GridItem>
        <TextWrapper>
          <blockquote>
            <p>"I've had the pleasure and privilege of working with Deb twice in my career - once where she lead the career development programme at the creative agency I worked, and then subsequently when I asked her to run a leadership programme for my senior team at a charity. Her engaging and direct style really challenges people to think about how they can be and do better. Her work is always grounded in solid evidence and she seems to have in-depth knowledge of every leadership framework and tool ever invented. I heartily recommend working with Deb."</p>
            <cite>Julie Dodd<br />Director of Digital Transformation and Communication, Parkinson’s UK</cite>
          </blockquote>
        </TextWrapper>
      </GridItem>

      <GridItem>
        <TextWrapper>
          <blockquote>
            <p>"I'm a big fan of Debs... She is super smart, highly articulate and fiercely creative. She is also warm hearted, open and honest. A Brilliant and rare combination. If you're reading this wondering whether you should hire her - just do it - you won't regret it (we didn't)!"</p>
            <cite>Jaimes Leggett<br /> Group CEO, M&amp;C Saatchi</cite>
          </blockquote>
        </TextWrapper>
      </GridItem>

      <GridItem>
        <TextWrapper>
          <blockquote>
            <p>"My colleagues couldn't stop talking about Deb's workshop sessions for weeks. She took us right out of our comfort zones and challenged us to reach to heights we never thought we'd reach. Every time I work with Deb she challenges me to reflect, question and change at least one element of my leadership practice."</p>
            <cite>Kai Vacher<br />Principal, British School Muscat </cite>
          </blockquote>
        </TextWrapper>
      </GridItem>

      <GridItem>
        <TextWrapper>
          <blockquote>
            <p>"I gave Deb a huge challenge to lead our agency through an exploration day. The brief was multi layered, challenging and constantly shifting. The mark of Deb's professionalism and expertise meant she took it all in her stride, and delivered a knock-out day. Since then, we have worked together a number of times. Deb intuitively knows how a creative business ebbs and flows, and consequently she makes a perfect consultant in this area. Fun, hard working and super dedicated (well above the call of duty), I recommend her wholeheartedly."</p>
            <cite>Hasan Kahir<br />Head of People, Fallon</cite>
          </blockquote>
        </TextWrapper>
      </GridItem>

      <GridItem>
        <TextWrapper>
          <blockquote>
            <p>"I have never had a more valuable leadership and development experience in my life. I heard things being discussed and put to rest in the light of day that have been festering in the dark for years. People got honest, and invested and actually fought for the company rather than defending their secluded teams. Difficult conversations were had in the right environment, and decisions were made regarding the future of the company. Change was made."</p>
            <cite>Alexander Mitchell<br />Vice President of Sales and Customer Success, Kano</cite>
          </blockquote>
        </TextWrapper>
      </GridItem>

    </Grid>

    <Logos />

  </Layout>
)

export default KindWords
