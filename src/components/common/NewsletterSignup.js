/* eslint-disable */
import React from "react"

const NewsletterSignup = props => {
  return (
    <section className={`section nl-signup has-background-link ${props.className}`}>
      <div className="container">
        <div className="columns is-vcentered">
          <div className="column is-6 has-text-centered">
            <h3 className="title has-text-white title-font">{props.title}</h3>
            <p className="subtitle has-text-weight-normal has-text-white subtitle-font">{props.subtitle}</p>
          </div>
          <div className="column is-5 ">
            <div className="field has-addons">
              <div className="control is-expanded">
                <input
                  className="input"
                  type="email"
                  placeholder={props.placeholder}
                  aria-label="email"
                />
              </div>
              <div className="control">
                <button className="button is-black">{props.cta}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewsletterSignup