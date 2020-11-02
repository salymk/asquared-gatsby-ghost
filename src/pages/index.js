/* eslint-disable */

import React from 'react'
import { Layout } from '../components/common'
import { MetaData } from '../components/common/meta'
import IndexHero from '../components/IndexHero'


const Index = () => {
    return (
        <>
        <MetaData location={location} />
        <Layout>
            <IndexHero subtitle="Modernity is challenging, let's figure it out together." cta="Start here" cta2="Read our blog"/>
        </Layout>
        </>
    )
}

export default Index
