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
                    <div css={{display: "flex", marginBottom: "-10px"}}>
                                {post.tags && (
                                    <div className="title has-text-link mr-3 is-uppercase" css={{fontSize: "12px", marginBottom: "20px"}}>
                                        
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
                        <h4 className="title mb-1 has-text-black title-font" css={{fontSize: "22px"}}>{post.title}</h4>
                        <p className='has-text-grey-darker card-subtitle' css={{fontWeight: "300"}}>{post.custom_excerpt}</p>

                        <div className='media mt-5'>
                        <div className='media-content ml-0'>
                            <p className="subtitle is-uppercase" css={{fontSize: ".8rem"}}>{post.published_at_pretty}  •  {readingTime}</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default PostBox
