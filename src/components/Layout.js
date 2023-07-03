import Head from 'next/head';
import NavBar from './NavBar';
import styles from '@/styles/Layout.module.css';
import { Open_Sans } from 'next/font/google';
import { AnimatePresence, motion } from 'framer-motion';

// const pageTransition = {
//     initial: {
//         opacity: 0,
//         innerHeight: 0,
//     },
//     animate: { opacity: 1 },
//     exit: {
//         opacity: 0,
//     },
// };

const openSans = Open_Sans({ subsets: ['latin'] });

export default function Layout({ children, route }) {
    return (
        <>
            <Head>
                <title>Matias Diaz Ruiz</title>
                <meta name="description" content="My personal website." />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/images/favicon.ico" />
            </Head>

            <div className={openSans.className}>
                <NavBar />

                <div className={styles.mainContent}>{children}</div>

                {/* <AnimatePresence mode="wait">
                    <motion.div
                        key={route}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        variants={pageTransition}
                        transition={{ duration: 0.2 }}
                        className={styles.mainContent}
                    >
                        {children}
                    </motion.div>
                </AnimatePresence> */}
            </div>
        </>
    );
}
