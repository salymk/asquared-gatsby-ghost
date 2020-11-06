/* eslint-disable */ 
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { Tags } from '@tryghost/helpers-gatsby'
import { readingTime as readingTimeHelper } from '@tryghost/helpers'
import { jsx } from 'emotion'

const PostBox = ({post}) => {
    const url = `/${post.slug}/`
    const readingTime = readingTimeHelper(post)
    return (
        <Link to={url}>
            <div className="box is-shadowless" css={{padding: '1em'}}>
                <div className="columns box-highlight">
                    <div className="column is-two-fifths">
                        <figure className="image">
                            <img src={post.feature_image} alt='hfhfh' />
                        </figure>
                    </div>
                    <div className="column is-7">
                        <div className="mb-3">
                            <small className="is-size-7">
                                <div className="tags">
                                    {post.tags && (
                                        <div className="tag is-link">
                                            {` `}
                                            <Tags
                                                post={post}
                                                visibility="public"
                                                autolink={false}
                                            />
                                        </div>
                                    )}
                                    {post.featured && (
                                        <div className="tag is-primary">
                                            Featured
                                        </div>
                                    )}
                                </div>
                            </small>
                        </div>
                        <h4 className="title is-4 mb-1 has-text-black">{post.title}</h4>
                        <p className='has-text-grey-darker'>{post.custom_excerpt}</p>

                        <div className='media mt-5'>
                        <div className='media-left' css={{marginRight: ".7em"}}>
                            <figure className='image is-32x32'>
                                {post.primary_author.profile_image ?
                                    <img className="" src={post.primary_author.profile_image} alt={post.primary_author.name}/> :
                                    <img className="" src="/images/icons/avatar.svg" alt={post.primary_author.name}/>
                                }
                            </figure>
                        </div>
                        <div className='media-content ml-0'>
                            <p className='title is-uppercase has-text-black has-text-weight-medium' css={{fontSize: ".7rem" }}>{ post.primary_author.name }</p>
                            <p className="subtitle is-uppercase" css={{fontSize: ".7rem"}}>{post.published_at_pretty} - {readingTime}</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default PostBox
