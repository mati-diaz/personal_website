import '@/styles/globals.css';
import Layout from '@/components/Layout';
import { AnimatePresence } from 'framer-motion';

export default function App({ Component, pageProps, router }) {
    return (
        <AnimatePresence
            mode="wait"
            initial={false}
            onExitComplete={() => window.scrollTo(0, 0)}
        >
            <Layout route={router.route}>
                <Component {...pageProps} key={router.route} />
            </Layout>
        </AnimatePresence>
    );
}
