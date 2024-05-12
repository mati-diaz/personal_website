import NavBar from '@/components/NavBar';
import '@/styles/globals.css';
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';
import styles from '@/styles/Layout.module.css';

export default function App({ Component, pageProps, router }) {
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
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    // exit={{ opacity: 0 }}
                    transition={{ duration: 0.2, type: 'keyframes' }}
                    className={styles.mainContent}
                >
                    <Component {...pageProps} key={router.route} />
                </motion.div>
            </AnimatePresence>
        </>
    );
}
