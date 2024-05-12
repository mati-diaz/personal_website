import NavBar from '@/components/NavBar';
import { motion } from 'framer-motion';
import styles from '@/styles/Layout.module.css';
import { usePathname } from "next/navigation";
import React from 'react';

export const Layout = React.forwardRef(({ children }) => {
    const key = usePathname();

    return (
        <>
            <motion.div
                key={key}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 2 }}
                className={styles.mainContent}
            >
                {children}
            </motion.div>
        </>
    );
});