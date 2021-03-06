/* eslint-disable */

import React from "react"
import { Layout, IndexHero, PostCard, PostBox, NewsletterSignup } from '../components/common'
import { MetaData } from '../components/common/meta'
import { Link, graphql } from "gatsby"
import { jsx, css } from 'emotion'
import Abdel from '../images/abdel.jpg'

const Start = () => {

  return (
    <Layout>
      <div className="section">
        <h1 className="title page-title-font is-1 is-size-2-mobile has-text-centered has-text-black pt-6">
        Get Started Here
        </h1>
        <hr className="cm-hr" />
      </div>
      <section className="section start-here-section">
        <div className="container py-4">
          <div className="columns is-vcentered">
            <div className="column is-6">
              <h2 className="title is-spaced is-2 is-size-3-mobile has-text-centered-mobile has-text-black-bis is-capitalized">
                Who am I? 
              </h2>
              <p className="content has-text-centered-mobile" css={{fontSize: "18px"}}>
              T'Challa, a member of the royal family of the fictional African country of Wakanda. After the death my father, I claimed the throne and the role of Black Panther. I was exposed to a mystical herb that enhanced my strength and agility to near-superhuman levels. 
              </p>
            </div>
            <div className="column is-4">
              <img
                src={Abdel}
                alt='Abdel smiling with arms crossed.'
              />
            </div>
          </div>
          <hr className="my-6" />
        </div>
        <div className="container box has-background-link-light	p-6">
          <div className="columns is-multiline">
              <div className="column is-6">
                <h2 className="title is-3 is-size-4-mobile mb-3 has-text-black-bis is-capitalized">
                Who is this for?
                </h2>
                <div className="content" css={{fontSize: "18px"}}>
                It's for the people of Wakanda! Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </div>
              </div>
              <div className="column is-6">
                <h2 className="title is-3 mb-3 is-size-4-mobile has-text-black-bis is-capitalized">
                Who is this for?
                </h2>
                <div className="content" css={{fontSize: "18px"}}>
                It's for the people of Wakanda! Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </div>
              </div>
              <div className="column is-6">
                <h2 className="title is-3 mb-3 is-size-4-mobile has-text-black-bis is-capitalized">
                Who is this for?
                </h2>
                <div className="content" css={{fontSize: "18px"}}>
                It's for the people of Wakanda! Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </div>
              </div>
              <div className="column is-6">
                <h2 className="title is-3 mb-3 is-size-4-mobile has-text-black-bis is-capitalized">
                Who is this for?
                </h2>
                <div className="content" css={{fontSize: "18px"}}>
                It's for the people of Wakanda! Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </div>
              </div>
          </div>
        </div>
        <hr className="my-6" />
        <div className="container has-text-centered mt-6">
          <h2 className="title is-2 is-size-3-mobile is-spaced has-text-black-bis">
                New to this or just getting started?
          </h2>
          <h3 className="cm-subtitle">
          If you're new to our website, then you're in the right place. Look, we all know this, modernity is challenging, but it doesn't have to be so let's figure it out together.
          </h3>
        </div>
        <NewsletterSignup
        className='mt-6'
        title="Sign up for our newsletter"
        subtitle="We'll never share your email"
        cta="Subscribe"
        placeholder='Your email here'
      />
      </section>
  
    </Layout>
  )
}



export default Start