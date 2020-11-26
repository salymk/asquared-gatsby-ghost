/* eslint-disable */ 
import React from "react"
import { Link } from "gatsby"
import { jsx } from 'emotion'

const IndexHero = props => {
  return (
    <section className="hero py-6">
      <div className="hero-body" css={{padding: "2.5rem .5rem"}}>
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-12 is-10-desktop has-text-centered">
              <h1 className="hero-title page-title-font mb-4 has-text-weight-bold is-capitalized has-text-black is-size-3-mobile">
                Do things <span className="has-text-link">right</span>.<br /> Do
                things <span className="has-text-link">better</span>.
              </h1>
              <p className="hero-subtitle py-3">{props.subtitle}</p>
              <div className="buttons is-centered">
                <Link
                  to="/start-here/"
                  className="button is-medium is-link has-text-weight-bold"
                >
                  {props.cta}
                </Link>
                <Link
                  to="/articles/"
                  className="button is-medium is-light has-text-weight-bold"
                >
                  {props.cta2}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default IndexHero