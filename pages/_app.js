import { Layout } from '../components/Layout';
import Head from 'next/head';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Head>
                <title>Matias Diaz Ruiz</title>
                <link rel="icon" href="/favicon.svg"></link>
            </Head>
            <Component {...pageProps} />
        </Layout>
    );
}

export default MyApp;
