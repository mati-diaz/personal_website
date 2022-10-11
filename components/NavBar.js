import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/components/NavBar.module.css';

import home_logo from '../assets/images/icons/home.png';
import person_logo from '../assets/images/icons/person.png';
import work_logo from '../assets/images/icons/work.png';
import mail_logo from '../assets/images/icons/mail.png';

export const NavBar = () => {
    const activeLink = ({ isActive }) =>
        isActive ? 'nav_item nav_active' : 'nav_item';

    return (
        <nav className={styles.navbar}>
            <Link href="/">
                <a className={styles.logo}>
                    <p>{'</>'}</p>
                </a>
            </Link>
            <ul className={styles.items}>
                <Link className={activeLink} href="/">
                    <a className={styles.item}>
                        <Image
                            src={home_logo}
                            width={25}
                            height={25}
                            alt="Home"
                        />
                        <p className="nav_item_text">Inicio</p>
                    </a>
                </Link>
                <Link className={activeLink} href="/about">
                    <a className={styles.item}>
                        <Image
                            src={person_logo}
                            width={25}
                            height={25}
                            alt="About"
                        />
                        <p className="nav_item_text">Sobre Mi</p>
                    </a>
                </Link>
                <Link className={activeLink} href="/projects">
                    <a className={styles.item}>
                        <Image
                            src={work_logo}
                            width={25}
                            height={25}
                            alt="Projects"
                        />
                        <p className="nav_item_text">Proyectos</p>
                    </a>
                </Link>
                <Link className={activeLink} href="/contact">
                    <a className={styles.item}>
                        <Image
                            src={mail_logo}
                            width={25}
                            height={25}
                            alt="Contact"
                        />
                        <p className="nav_item_text">Contacto</p>
                    </a>
                </Link>
            </ul>
        </nav>
    );
};
