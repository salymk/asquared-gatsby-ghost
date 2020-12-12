import React, { useState } from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import { Link } from 'gatsby';
import { jsx, css } from 'emotion';
import { Layout } from '../components/common'
import { MetaData } from '../components/common/meta'

const Newsletter = (props) => {
    const [subscriber, setSubscriber] = useState(``)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const result = await addToMailchimp(subscriber);
        setSubscriber(result);
        console.log(result);
        document.getElementById(`contact-form`).reset();
    }

    const handleChange = (event) => {
        setSubscriber(event.target.value)
    }
    return (
        <Layout>
            <div className="hero is-medium">
                <div className="hero-body">
                    <div className="columns is-centered">
                        <div className="column is-10">
                            <div className="container has-text-centered">
                                <h1 className="title page-title-font is-1 is-size-4-mobile has-text-centered has-text-black pt-6">
                                    Let's tackle the challenges of modernity
                                    together!
                                </h1>
                                <p className="cm-subtitle">
                                    Subscribe to recieve our 200 step guide to
                                    body building greatness! Pluse extra goodies
                                    every Friday.
                                </p>
                            </div>
                            <div className="columns is-centered mt-4 is-multiline">
                                <div className="column is-8">
                                    <form
                                        onSubmit={handleSubmit}
                                        id="contact-form"
                                    >
                                        <div className="field has-addons">
                                            <div className="control is-expanded">
                                                <input
                                                    className="input is-large"
                                                    type="email"
                                                    placeholder="Your email here"
                                                    name="Email"
                                                    onChange={handleChange}
                                                />
                                            </div>

                                            <div className="control">
                                                <button
                                                    className="button is-link is-large is-fullwidth"
                                                    type="submit"
                                                >
                                                    Subscribe
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                    <p className="mt-2 is-size-4	">
                                        {subscriber.result === `success`
                                            ? `Thanks! You've been added to our newsletter.
                                `
                                            : ``}
                                    </p>
                                </div>
                                {/* <div className="column">
                                    <div className="control">
                                        <button
                                            className="button is-link is-large is-fullwidth"
                                            type="submit"
                                        >
                                            Subscribe
                                        </button>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Newsletter
