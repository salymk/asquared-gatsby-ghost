/* eslint-disable */

import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

import { Layout, MoreArticles } from '../components/common'
import { MetaData } from '../components/common/meta'
import { Tags } from '@tryghost/helpers-gatsby'
import { readingTime as readingTimeHelper } from '@tryghost/helpers'
import { jsx } from 'emotion'

import {FacebookShareButton, LinkedinShareButton, TwitterShareButton, WhatsappShareButton, FacebookIcon, LinkedinIcon, TwitterIcon, WhatsappIcon} from 'react-share'


/**
 * Single post view (/:slug)
 *
 * This file renders a single post and loads all the content.
 *
 */
const Post = ({ data, location }) => {
    const post = data.ghostPost
    const relatedPosts = data.allGhostPost.edges
    const readingTime = readingTimeHelper(post)
    const shareUrl = `https://frontendsolved.com/${post.slug}/`
    console.log(shareUrl)


    return (
        <>
            <MetaData data={data} location={location} type="article" />
            <Helmet>
                <style type="text/css">{`${post.codeinjection_styles}`}</style>
            </Helmet>
            <Layout>
                <div className="columns is-centered mt-6">
                    <article className="column is-8-tablet is-7-desktop mt-6">
                    <section className="post-full-content mb-6">
                            <div css={{display: "flex"}}>
                                {post.tags && (
                                    <div className="title has-text-link mr-3 mb-2 is-uppercase" css={{fontSize: "12px"}}>
                                        {` `}
                                        <Tags
                                            post={post}
                                            visibility="public"
                                            autolink={false}
                                        />
                                    </div>
                                )}
                                {post.featured && (
                                    <div className="title has-text-primary is-uppercase" css={{fontSize: "12px"}}>
                                        Featured
                                    </div>
                                )}
                            </div>
                            <h1 className="content-title has-text-black is-capitalized">{post.title}</h1>
                            <h2 className="post-subtitle mt-2">{post.custom_excerpt}</h2>

                                <hr className='mt-6'/>

                            <div className='media mt-5'>
                        <div className='media-left' css={{marginRight: ".7em"}}>
                            <figure className='image is-48x48'>
                                {post.primary_author.profile_image ?
                                    <img className="" css={{borderRadius: "50%"}} src={post.primary_author.profile_image} alt={post.primary_author.name}/> :
                                    <img className="" src="/images/icons/avatar.svg" alt={post.primary_author.name}/>
                                }
                            </figure>
                        </div>
                        <div className='media-content ml-0 mt-2'>
                            <p className='title is-uppercase has-text-black has-text-weight-medium' css={{fontSize: ".9rem" }}>{ post.primary_author.name }</p>
                            <p className="subtitle has-text-weight-normal is-uppercase" css={{fontSize: ".7rem"}}>{post.published_at_pretty} - {readingTime}</p>
                        </div>
                    </div>
                                                        
                        </section>

                        {post.feature_image ? (
                            <figure className="post-feature-image">
                                <img
                                    src={post.feature_image}
                                    alt={post.title}
                                />
                            </figure>
                        ) : null}
                        <section className="post-full-content">
                            {/* The main post content */}
                            <section
                                className="content-body load-external-scripts"
                                dangerouslySetInnerHTML={{ __html: post.html }}
                            />
                        </section>
                        <hr className="mt-6"/>

                    <div className="social-share-container">
                        <h1 className='title is-3 mr-5'>Share</h1>
                        <FacebookShareButton
                            url={shareUrl}
                            quote={post.custom_excerpt}
                            className="mr-3 social-share-button"
                        >
                            <FacebookIcon size={48}/>
                        </FacebookShareButton>

                        <TwitterShareButton
                            url={shareUrl}
                            title={post.custom_excerpt}
                            className="mr-3 social-share-button">
                            <TwitterIcon size={48}/>
                        </TwitterShareButton>

                        <LinkedinShareButton url={shareUrl}>
                            <LinkedinIcon size={48} className="social-share-button"/>
                        </LinkedinShareButton>
                    </div>
                    </article>
                </div>
            <section>
           <div className='columns is-centered'>
               <div className="column is-8-tablet is-7-desktop">
                <h1 className='title is-4'>You might also like...</h1>
                {relatedPosts.map(({node}) => (
                    <MoreArticles key={node.id} post={node}/>
                ))}
                </div>
            </div>
        </section>
                
               
                
            </Layout>
        </>
    )
}

// Post.propTypes = {
//     data: PropTypes.shape({
//         ghostPost: PropTypes.shape({
//             codeinjection_styles: PropTypes.object,
//             title: PropTypes.string.isRequired,
//             html: PropTypes.string.isRequired,
//             feature_image: PropTypes.string,
//         }).isRequired,
//     }).isRequired,
//     location: PropTypes.object.isRequired,
// }

export default Post

export const postQuery = graphql`
    query($slug: String!) {
        ghostPost(slug: { eq: $slug }) {
            ...GhostPostFields
        }

        allGhostPost(sort: {order: DESC, fields: [published_at]}, limit: 5) {
            edges {
              node {
                ...GhostPostFields
              }
            }
          }
    }

    
`
