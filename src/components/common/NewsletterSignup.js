import React, { useState } from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp';

export default function NewsletterSignup(props) {
    const [subscriber, setSubscriber] = useState(``)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const result = await addToMailchimp(subscriber);
        setSubscriber(result);
        console.log(result)
        document.getElementById(`contact-form`).reset();
    }

    const handleChange = (event) => {
        setSubscriber(event.target.value)
    }

    return (
        <section className="section nl-signup has-background-link">
            <div className="container">
                <div className="columns is-vcentered">
                    <div className="column is-7 has-text-centered">
                        <h3 className="title is-size-4-mobile has-text-white ">
                            {props.title}
                        </h3>
                        <p className="cm-subtitle has-text-weight-normal has-text-white">
                            {props.subtitle}
                        </p>
                    </div>
                    <div className="column is-5 ">
                        <form onSubmit={handleSubmit} id="contact-form">
                            <div className="field has-addons">
                                <div className="control is-expanded">
                                    <input
                                        className="input"
                                        type="email"
                                        placeholder="Your email here"
                                        name="Email"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="field">
                                    <div className="control">
                                        <button
                                            className="button is-black"
                                            type="submit"
                                        >
                                            Sign up
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <p className="has-text-white">
                            {subscriber.result === `success`
                                ? `Thanks! You've been added to our newsletter.
                                `
                                : ``}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
