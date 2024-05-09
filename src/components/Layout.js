import Head from 'next/head';
import NavBar from './NavBar';
import styles from '@/styles/Layout.module.css';
import { Open_Sans } from 'next/font/google';
import { AnimatePresence, motion } from 'framer-motion';

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

                {/* <div className={styles.mainContent}>{children}</div> */}

                {/* Works */}
                {/* <motion.div
                    key={route}
                    initial={{ opacity: 0, innerHeight: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: .3 }}
                    className={styles.mainContent}
                >
                    {children}
                </motion.div> */}

                <motion.div
                    key={route}
                    initial={{ x: 300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 300, opacity: 0 }}
                    transition={{
                        type: 'spring',
                        stiffness: 260,
                        damping: 20,
                    }}
                    className={styles.mainContent}
                >
                    {children}
                </motion.div>
            </div>
        </>
    );
}
