/* eslint-disable */
import { graphql } from 'gatsby'
import React from 'react'
import PropTypes from 'prop-types'
import { Layout, PostCard } from '../components/common'
import { MetaData } from '../components/common/meta'


const Articles = ({data, location}) => {
    const posts = data.allGhostPost.edges
    console.log(posts)
    return (
        <>
            <MetaData location={location} />

            <Layout>
                <h1 className='title is-1 has-text-centered has-text-weight-bold has-text-black-bis pt-6'>Articles</h1>
                <hr className='cm-hr'/>
                <div className='container pt-6'>
                    <section className='post-feed'>
                        {posts.map(({node}) => (
                            <PostCard key={node.id} post={node}/>
                        ))}
                    </section>
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
