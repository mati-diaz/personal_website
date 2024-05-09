import Head from 'next/head';
import NavBar from './NavBar';
import styles from '@/styles/Layout.module.css';
import { Open_Sans } from 'next/font/google';
import { motion } from 'framer-motion';

const openSans = Open_Sans({ subsets: ['latin'] });

export default function Layout({ children, route }) {

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.06,
                duration: .4
            },
        },
    };

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

            <div className={openSans.className} style={{ overflow: 'hidden' }}>
                <NavBar />

                <motion.div
                    key={route}
                    initial="hidden"
                    animate="show"
                    variants={container}
                    className={styles.mainContent}
                >
                    {children}
                </motion.div>
            </div>
        </>
    );
}
