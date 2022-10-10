import { NavBar } from './NavBar';
import styles from '../styles/components/Layout.module.css';

export const Layout = ({ children }) => {
    return (
        <div>
            <NavBar />
            <main className={styles.content}>{children}</main>
        </div>
    );
};
