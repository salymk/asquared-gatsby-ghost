/* eslint-disable */ 
import React from "react"
import { Link } from "gatsby"

const IndexHero = props => {
  return (
    <section className="hero">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-vcentered">
            <div className="column is-6">
              <h1 className="hero-title mb-4 has-text-weight-bold is-capitalized has-text-black-bis is-size-3-mobile">
                Do things <span className="has-text-link">right</span>. Do
                things <span className="has-text-link">better</span>.
              </h1>
              <p className="subtitle">{props.subtitle}</p>
              <div className="buttons">
                <Link
                  to="/start/"
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