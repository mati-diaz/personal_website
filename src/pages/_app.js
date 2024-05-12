import '@/styles/globals.css';
import { AnimatePresence } from 'framer-motion';

export default function App({ Component, pageProps, router }) {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
        },
        exit: { opacity: 0 },
    };

    return (
        <>
            <AnimatePresence
                mode="wait"
                initial={false}
                onExitComplete={() => window.scrollTo(0, 0)}
            >
                {/* <Component {...pageProps} key={router.route} /> */}
                <Component {...pageProps} key={router.asPath} />
            </AnimatePresence>
        </>
    );
}
