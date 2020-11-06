/* eslint-disable */

import { Layout } from '../components/common'
import { MetaData } from '../components/common/meta'
import { Link } from "gatsby"
import { jsx, css } from 'emotion'

const Newsletter = ( props) => {
  return (
    <Layout>
      <div className="hero is-medium">
        <div className="hero-body">
          <div className="columns is-centered">
            <div className="column is-10">
              <div className="container has-text-centered">
                <h1 className="title is-1 is-spaced has-text-weight-bold is-size-3-mobile has-text-black-bis">
                Let's tackle the challenges of modernity together!
                </h1>
                <p className="subtitle">Subscribe to recieve our 200 step guide to body building greatness! Pluse extra goodies every Friday.</p>
              </div>
              <div className="columns is-centered mt-4 is-multiline">
                <div className="column is-8">
                  <div className="field has-addons">
                    <div className="control is-expanded">
                      <input
                        className="input is-large"
                        type="email"
                        placeholder='Enter your email here'
                        aria-label="email"
                      />
                    </div>
                  </div>
                </div>
                <div className="column">
                  <div className="control">
                    <button className="button is-link is-large is-fullwidth">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Newsletter