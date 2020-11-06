/* eslint-disable */

import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

import { Layout } from '../components/common'
import { MetaData } from '../components/common/meta'
import { Tags } from '@tryghost/helpers-gatsby'
import { readingTime as readingTimeHelper } from '@tryghost/helpers'
import { jsx } from 'emotion'


/**
 * Single post view (/:slug)
 *
 * This file renders a single post and loads all the content.
 *
 */
const Post = ({ data, location }) => {
    const post = data.ghostPost
    const readingTime = readingTimeHelper(post)


    return (
        <>
            <MetaData data={data} location={location} type="article" />
            <Helmet>
                <style type="text/css">{`${post.codeinjection_styles}`}</style>
            </Helmet>
            <Layout>
                <div className="columns is-centered mt-6">
                    <article className="column is-12 is-7-tablet is-7-desktop mt-6">
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
                            <h1 className="has-text-blacktitle is-size-2-mobile has-text-black" css={{fontSize: "3.5rem",
    fontWeight: "600", lineHeight: "1.1em"}}>{post.title}</h1>
                            <h2 className="subtitle mt-2 is-size-5-mobile" css={{  
                                marginTop: "10px",
                                color: "var(--midgrey)",
                                fontFamily:" Georgia,serif",
                                fontSize: "1.4rem",
                                lineHeight: "1.4em",
                                fontWeight: "300"}}>{post.custom_excerpt}</h2>

                                <hr className='mt-6'/>

<div className='media mt-5'>
                        <div className='media-left' css={{marginRight: ".7em"}}>
                            <figure className='image is-48x48'>
                                {post.primary_author.profile_image ?
                                    <img className="" src={post.primary_author.profile_image} alt={post.primary_author.name}/> :
                                    <img className="" src="/images/icons/avatar.svg" alt={post.primary_author.name}/>
                                }
                            </figure>
                        </div>
                        <div className='media-content ml-0 mt-2'>
                            <p className='title is-uppercase has-text-black has-text-weight-medium' css={{fontSize: ".9rem" }}>{ post.primary_author.name }</p>
                            <p className="subtitle is-uppercase" css={{fontSize: ".7rem"}}>{post.published_at_pretty} - {readingTime}</p>
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
                        <section className="post-full-content content">
                            {/* The main post content */}
                            <section
                                className="content-body load-external-scripts"
                                dangerouslySetInnerHTML={{ __html: post.html }}
                            />
                        </section>
                    </article>
                </div>
            </Layout>
        </>
    )
}

Post.propTypes = {
    data: PropTypes.shape({
        ghostPost: PropTypes.shape({
            codeinjection_styles: PropTypes.object,
            title: PropTypes.string.isRequired,
            html: PropTypes.string.isRequired,
            feature_image: PropTypes.string,
        }).isRequired,
    }).isRequired,
    location: PropTypes.object.isRequired,
}

export default Post

export const postQuery = graphql`
    query($slug: String!) {
        ghostPost(slug: { eq: $slug }) {
            ...GhostPostFields
        }
    }
`
