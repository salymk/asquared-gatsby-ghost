/* eslint-disable */
import { graphql } from 'gatsby'
import React from 'react'
import PropTypes from 'prop-types'
import { Layout, PodcastCard, NewsletterSignup } from '../components/common'
import { MetaData } from '../components/common/meta'


const Podcast = ({data, location}) => {
    const posts = data.allGhostPost.edges
    return (
        <>
            <MetaData location={location} title="Blog" />

            <Layout>
                <h1 className='title page-title-font is-1 is-size-2-mobile has-text-centered has-text-black pt-6'>Podcast</h1>
                <hr className='cm-hr'/>
                <div className='container pt-6 cm-section'>
                    <section className='post-feed'>
                        {posts.map(({node}) => (
                            <PodcastCard key={node.id} post={node}/>
                        ))}
                    </section>
                    <NewsletterSignup
                    className='mt-6'
                        title="Subscribe to be the first to get my podcasts"
                        subtitle="We'll never share your email"
                        cta="Subscribe"
                        placeholder='Your email here'
                    />
                </div>

            </Layout>
        </>
    )
}

Podcast.propTypes = {
    data: PropTypes.shape({
        allGhostPost: PropTypes.object.isRequired,
    }).isRequired,
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired,
    }).isRequired,
    pageContext: PropTypes.object,
}

export default Podcast

export const allGhostPost = graphql`
query {
    allGhostPost(filter: {tags: {elemMatch: {name: {eq: "#podcast"}}}}) {
      edges {
        node {
            ...GhostPostFields
        }
      }
    }
  }
`