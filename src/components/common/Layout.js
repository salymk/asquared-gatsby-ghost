/* eslint-disable */

import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { Link, StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { jsx } from 'emotion'

import { Navigation } from '.'
import config from '../../utils/siteConfig'

// Styles
import '../../styles/styles.scss'

// import '../../styles/app.css'


/**
 * Main layout component
 *
 * The Layout component wraps around each page and template.
 * It also provides the header, footer as well as the main
 * styles, and meta data for each page.
 *
 */
const DefaultLayout = ({ data, children, bodyClass, isHome }) => {
    const site = data.allGhostSettings.edges[0].node
    const twitterUrl = site.twitter
        ? `https://twitter.com/${site.twitter.replace(/^@/, ``)}`
        : null
    const facebookUrl = site.facebook
        ? `https://www.facebook.com/${site.facebook.replace(/^\//, ``)}`
        : null
    console.log(site)

    const onClick = () => {
        const toggle = document.querySelector(`.navbar-burger`);
        const menu = document.querySelector(`.navbar-menu`);
        toggle.classList.toggle(`is-active`);
        menu.classList.toggle(`is-active`);
    };
    return (
        <>
            <Helmet>
                <html lang={site.lang} />
                <style type="text/css">{`${site.codeinjection_styles}`}</style>
                <body className={bodyClass} />
            </Helmet>

            <div className="">
                {/* The main header section on top of the screen */}
                <header>
                    <nav className="navbar has-shadow is-fixed-top">
                        <div className="container">
                            <div className="navbar-brand">
                                <Link to="/" className="navbar-item">
                                    {site.title}
                                </Link>

                                <a
                                    className="navbar-burger"
                                    aria-label="menu"
                                    aria-expanded="false"
                                    onClick={onClick}
                                >
                                    <span aria-hidden="true" />
                                    <span aria-hidden="true" />
                                    <span aria-hidden="true" />
                                </a>
                            </div>
                            <div className="navbar-menu has-text-centered-mobile has-text-centered-tablet">
                                <div className="navbar-end">
                                    <Navigation
                                        data={site.navigation}
                                        navClass="navbar-item"
                                    />
                                </div>
                                <div>
                                    <div className="navbar-item">
                                        <Link
                                            className="button is-outlined is-link has-text-weight-bold is-size-5"
                                            to="/newsletter/"
                                        >
                                            Subscribe
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </header>

                <main css={{padding: "3rem 0.7rem"}}>
                    {/* All the main content gets inserted here, index.js, post.js */}
                    {children}
                </main>

                {/* The footer at the very bottom of the screen */}
                <footer className="footer">
                    <div className="container">
                        <div className="level">
                            <div className="level-left">
                                <div className="level-item">
                                    <Link to="/" className="title is-4">
                                        {site.title}
                                    </Link>
                                </div>
                            </div>
                            <div className="level-right">
                                <Navigation
                                    data={site.navigation}
                                    navClass="level-item"
                                />
                            </div>
                        </div>
                        <hr />
                        <div className="columns">
                            <div className="column">
                                <h4 className="title is-4">
                                    Follow me on social media
                                </h4>
                                <div className="buttons">
                                    <a
                                        className="button"
                                        href={twitterUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        {/* <img src={Twitter} alt="Icon" /> */}
                                    </a>
                                </div>
                            </div>
                            <div className="column has-text-centered has-text-right-tablet">
                                <p className="subtitle is-6">
                                    © 2020 ASquared. All right reserved.
                                </p>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    )
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
    bodyClass: PropTypes.string,
    isHome: PropTypes.bool,
    data: PropTypes.shape({
        file: PropTypes.object,
        allGhostSettings: PropTypes.object.isRequired,
    }).isRequired,
}

const DefaultLayoutSettingsQuery = (props) => (
    <StaticQuery
        query={graphql`
            query GhostSettings {
                allGhostSettings {
                    edges {
                        node {
                            ...GhostSettingsFields
                        }
                    }
                }
                file(relativePath: { eq: "ghost-icon.png" }) {
                    childImageSharp {
                        fixed(width: 30, height: 30) {
                            ...GatsbyImageSharpFixed
                        }
                    }
                }
            }
        `}
        render={(data) => <DefaultLayout data={data} {...props} />}
    />
)

export default DefaultLayoutSettingsQuery
