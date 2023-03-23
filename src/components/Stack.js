import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from "next/router";
import styles from '../styles/NavBar.module.css';

export default function NavBar() {
    const router = useRouter();

    const activeNav = (path) => router.pathname == path ? styles.activeNav : '';

    return (
        <nav className={styles.navbar}>
            <div className={styles.navContent}>
                <Link href="/" className={styles.logo}>
                    <Image alt='logo' width={45} height={45} src='/favicon.ico' />
                </Link>
                <ul className={styles.items}>
                    <li className={styles.item + ' ' + (activeNav('/'))}>
                        <Link href="/">
                            <Image alt="Home" width={20} height={20} src='/icons/home.png' />
                            <p>Inicio</p>
                        </Link>
                    </li>
                    <li className={styles.item + ' ' + (activeNav('/about'))}>
                        <Link href="/about">
                            <Image alt="About" width={20} height={20} src='/icons/person.png' />
                            <p>Sobre Mí</p>
                        </Link>
                    </li>
                    <li className={styles.item + ' ' + (activeNav('/projects'))}>
                        <Link href="/projects">
                            <Image alt="Projects" width={20} height={20} src='/icons/work.png' />
                            <p>Proyectos</p>
                        </Link>
                    </li>
                    <li className={styles.item + ' ' + (activeNav('/contact'))}>
                        <Link href="/contact">
                            <Image alt="Contact" width={20} height={20} src='/icons/mail.png' />
                            <p>Contacto</p>
                        </Link>
                    </li>
                </ul>

                {/* <div className={styles.lang}>
                    <Image alt='language' width={25} height={25} src='/icons/lang.png' />
                    <p>Español</p>
                </div> */}
            </div>
        </nav>
    );
};