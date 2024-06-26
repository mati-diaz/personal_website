import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { Open_Sans } from 'next/font/google';
import NavBar from './NavBar';

const openSans = Open_Sans({ subsets: ['latin'] });

export default function Layout({ children }) {
    return (
        <div className={openSans.className}>
            <NavBar />

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="mainContent"
            >
                {children}
            </motion.div>
        </div>
    );
}
