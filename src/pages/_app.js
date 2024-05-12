import '@/styles/globals.css';
import Layout from '@/components/Layout';
import { AnimatePresence } from 'framer-motion';

export default function App({ Component, pageProps, router }) {
    return (
        <AnimatePresence
            onExitComplete={() => window.scrollTo(0, 0)}
            mode="wait"
        >
            <Layout route={router.route}>
                <Component {...pageProps} key={router.route} />
            </Layout>
        </AnimatePresence>
    );
}
