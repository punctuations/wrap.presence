import {GeistProvider, CssBaseline} from '@geist-ui/react'
import type {AppProps} from 'next/app'

function MyApp({Component, pageProps}: AppProps) {
    return (
        <GeistProvider>
            <CssBaseline/>
            <Component {...pageProps} />
        </GeistProvider>
    )
}

export default MyApp
