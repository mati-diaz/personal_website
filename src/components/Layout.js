import { motion } from 'framer-motion';
import React, { useState } from 'react';

export default function Layout({ children }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="mainContent"
        >
            {children}
        </motion.div>
    );
}
