/* eslint-disable */

import React from 'react'
import { Layout, IndexHero, PostCard, PostBox, NewsletterSignup } from '../components/common'
import { MetaData } from '../components/common/meta'
import { Link, graphql } from "gatsby"
import { jsx, css } from 'emotion'



const Index = ({data, location}) => {
    const featuredPost1 = data.allGhostPost.edges[0]
    const featuredPost2 = data.allGhostPost.edges[1]
    const featuredPost3 = data.allGhostPost.edges[2]

    console.log(featuredPost1.node)
    return (
        <>
        <MetaData location={location} />
        <Layout>
            <IndexHero subtitle="Modernity is challenging, let's figure it out together." cta="Start here" cta2="Read our blog"/>
            
      <section className='cm-section'>
      <div className="container">
        <h2 className="title page-title-font mb-4 has-text-centered has-text-black">
          Featured Articles
        </h2>
        <hr className="cm-hr mb-6" />

        <div className="columns is-multiline">
          <div className="column is-12 is-7-desktop">
            <PostBox post={featuredPost1.node}/>
            <PostBox post={featuredPost2.node}/>

          </div>
          <div className="column is-12 is-5-desktop">
            <PostCard post={featuredPost3.node}/>
          </div>
        </div>
        
        <div className="buttons is-centered">
          <Link
            to="/articles/"
            className="button is-link is-medium has-text-weight-bold"
          >
            Read more
          </Link>
        </div>
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
        </>
    )
}

export default Index

export const allFeaturedPosts = graphql`
query {
    allGhostPost(filter: {featured: {eq: true}}) {
      edges {
        node {
            ...GhostPostFields
        }
      }
    }
  }
`