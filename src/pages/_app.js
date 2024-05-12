import '@/styles/globals.css';
import { AnimatePresence, motion } from 'framer-motion';
import NavBar from '@/components/NavBar';
import styles from '@/styles/Layout.module.css';

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
            <NavBar />

            <AnimatePresence
                mode="wait"
                initial={false}
                onExitComplete={() => window.scrollTo(0, 0)}
            >
                <motion.div
                    key={router.route}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    variants={container}
                    transition={{ duration: .2, type: "keyframes" }}
                    className={styles.mainContent}
                >
                    <Component {...pageProps} key={router.route} />
                </motion.div>
            </AnimatePresence>
        </>
    );
}
