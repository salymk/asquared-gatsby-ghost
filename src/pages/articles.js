/* eslint-disable */
import { graphql } from 'gatsby'
import React from 'react'
import PropTypes from 'prop-types'
import { Layout, PostCard, NewsletterSignup } from '../components/common'
import { MetaData } from '../components/common/meta'


const Articles = ({data, location}) => {
    const posts = data.allGhostPost.edges
    return (
        <>
            <MetaData location={location} title="Articles" />

            <Layout>
                <h1 className='title page-title-font is-1 is-size-2-mobile has-text-centered has-text-black pt-6'>Articles</h1>
                <hr className='cm-hr'/>
                <div className='container pt-6 cm-section'>
                    <section className='post-feed'>
                        {posts.map(({node}) => (
                            <PostCard key={node.id} post={node}/>
                        ))}
                    </section>
                    <NewsletterSignup
                    className='mt-6'
                        title="Sign up for our newsletter"
                        subtitle="We'll never share your email"
                        cta="Subscribe"
                        placeholder='Your email here'
                    />
                </div>

            </Layout>
        </>
    )
}

Articles.propTypes = {
    data: PropTypes.shape({
        allGhostPost: PropTypes.object.isRequired,
    }).isRequired,
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired,
    }).isRequired,
    pageContext: PropTypes.object,
}

export default Articles

export const allPosts = graphql`
query {
    allGhostPost(
        sort: { order: DESC, fields: [published_at] } 
        
        ) {
      edges {
        node {
          ...GhostPostFields
        }
      }
    }
  }
`
