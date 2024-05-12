// import NavBar from '@/components/NavBar';
import { motion } from 'framer-motion';
import styles from '@/styles/Layout.module.css';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';

export default function Layout({ children }) {
    // const key = usePathname();

    const [isExiting, setIsExiting] = useState(false);

    const handleExitComplete = () => {
        setIsExiting(false);
    };

    const handleExit = () => {
        setIsExiting(true);
    };

    return (
        <motion.div
            // key={key}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className={styles.mainContent}
            onAnimationComplete={handleExitComplete}
            style={{ visibility: isExiting ? "hidden" : "visible" }}
        >
            {children}
        </motion.div>
        // <div className={styles.mainContent}>
        //     {children}
        // </div>
    );
}
