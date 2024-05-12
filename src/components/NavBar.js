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
                    <Image alt='logo' width={410} height={410} src='/images/logo.svg' />
                </Link>
                <ul className={styles.items}>
                    <li className={styles.item + ' ' + (activeNav('/'))}>
                        <Link scroll={false} href="/">
                            <svg fill="#fff" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M222.913 951.152q-32.43 0-54.867-22.557-22.437-22.556-22.437-54.747v-386.37q0-18.179 7.733-34.28 7.734-16.1 23.18-27.068L433.37 232.565q11.012-7 22.678-10.859 11.666-3.858 24.168-3.858 12.501 0 24.014 3.858 11.512 3.859 22.4 10.859L783.478 426.13q15.424 11.054 23.288 27.127 7.864 16.073 7.864 34.221v386.37q0 32.191-22.507 54.747-22.508 22.557-55.036 22.557H565V654.565H395v296.587H222.913Z"/></svg>
                            <p>Inicio</p>
                        </Link>
                    </li>
                    <li className={styles.item + ' ' + (activeNav('/about'))}>
                        <Link scroll={false} href="/about">
                            <svg fill="#fff" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M479.989 567.565q-72.745 0-118.182-45.557T316.37 403.864q0-72.588 45.399-118.074 45.399-45.486 118.144-45.486t118.351 45.459q45.606 45.46 45.606 118.22 0 72.468-45.568 118.025t-118.313 45.557ZM220.63 926q-32.685 0-54.995-22.267-22.309-22.268-22.309-55.037V815.72q0-41.985 20.513-72.333 20.514-30.348 53.878-45.691 68.761-32 133.142-47.381 64.38-15.38 129.077-15.38 65.174 0 128.88 16 63.706 16 132.467 46.761 34.428 15.064 55.029 45.432 20.601 30.368 20.601 72.592v32.976q0 32.769-22.379 55.037Q772.154 926 739.37 926H220.63Z"/></svg>
                            <p>Sobre Mí</p>
                        </Link>
                    </li>
                    <li className={styles.item + ' ' + (activeNav('/projects'))}>
                        <Link scroll={false} href="/projects">
                            <svg fill="#fff" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M140.109 957.478q-30.746 0-54.025-23.349-23.28-23.35-23.28-54.194v-478.5q0-30.746 23.28-54.025 23.279-23.28 54.025-23.28h164.456v-97.891q0-30.844 23.28-54.194 23.279-23.349 54.025-23.349h196.26q30.746 0 54.025 23.349 23.28 23.35 23.28 54.194v97.891h164.456q30.845 0 54.194 23.28 23.35 23.279 23.35 54.025v478.5q0 30.844-23.35 54.194-23.349 23.349-54.194 23.349H140.109ZM381.87 324.13h196.26v-97.891H381.87v97.891Z"/></svg>
                            <p>Proyectos</p>
                        </Link>
                    </li>
                    <li className={styles.item + ' ' + (activeNav('/contact'))}>
                        <Link scroll={false} href="/contact">
                            <svg fill="#fff" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M140.109 912.674q-30.65 0-53.978-23.447-23.327-23.447-23.327-53.857V316.63q0-30.509 23.328-54.026 23.327-23.517 53.977-23.517h679.782q30.749 0 54.146 23.517 23.398 23.517 23.398 54.026v518.74q0 30.41-23.398 53.857-23.397 23.447-54.146 23.447H140.109ZM480 601.587q5.239 0 9.853-1.5t10.615-4.99l307.294-201.158q4.89-2.798 8.51-9.357 3.619-6.56 3.619-14.49 0-15.394-14.478-25.069-14.478-9.675-28.717.803L480 536.152 185.304 345.826q-15.239-9.239-30.217-1-14.978 8.239-14.978 24.68 0 7.445 4.119 13.981 4.12 6.535 8.404 10.55l306.905 201.06q5.996 3.49 10.61 4.99 4.614 1.5 9.853 1.5Z"/></svg>
                            <p>Contacto</p>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};