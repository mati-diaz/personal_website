// import NavBar from '@/components/NavBar';
import { motion } from 'framer-motion';
import styles from '@/styles/Layout.module.css';
// import { usePathname } from 'next/navigation';
import React from 'react';

export default function Layout({ children }) {
    // const key = usePathname();

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className={styles.mainContent}
        >
            {children}
        </motion.div>
        // <div className={styles.mainContent}>
        //     {children}
        // </div>
    );
}
