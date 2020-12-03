/* eslint-disable */
import React from 'react';

export default function NewsletterSignup(props) {
    return (
        <section
            className={`section nl-signup has-background-link ${props.className}`}
        >
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
                                <button
                                    type="button"
                                    className="button is-black"
                                >
                                    {props.cta}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
