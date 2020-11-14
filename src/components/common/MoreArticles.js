/* eslint-disable */ 

import React from 'react'
import { jsx } from 'emotion'
import {Link} from 'gatsby'
import { readingTime as readingTimeHelper } from '@tryghost/helpers'



const MoreArticles = ({post}) => {
    const url = `/${post.slug}/`

    const readingTime = readingTimeHelper(post)
    return (

                <Link to={url} className="related-article-link">
                <article className='related-article'>
                        <p css={{whiteSpace: "nowrap"}} className='has-text-weight-bold has-text-warning mr-3 is-uppercase'>{post.published_at_related}</p>
                        <p className="related-article-title">{post.title}</p>
                    <div>
                        <p css={{whiteSpace: "nowrap"}}>{readingTime}</p>
                    </div>
                </article>
                <hr css={{margin: "0"}}/>
                </Link>
               
    )
}

export default MoreArticles
