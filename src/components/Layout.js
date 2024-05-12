import { motion } from 'framer-motion';
import styles from '@/styles/Layout.module.css';

export default function Layout({ children }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, type: 'keyframes' }}
            className={styles.mainContent}
        >
            {children}
        </motion.div>
    );
}
