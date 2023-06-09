import React, { FC } from 'react'
import Head from 'next/head'
import App from '@/components/app'

const Home: FC = () => {
    return (
        <>
            <Head>
                <title>Adventure</title>
                <meta name="description" content="Adventure game powered by GPT" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <App />
        </>
    )
}

export default Home
