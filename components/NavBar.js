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
                <div className={styles.logo}>
                    <p>m</p>
                </div>
            </Link>
            <ul className={styles.items}>
                <Link className={activeLink} href="/">
                    <div className={styles.item}>
                        <Image src={home_logo} width={25} height={25} />
                        <p className="nav_item_text">Inicio</p>
                    </div>
                </Link>
                <Link className={activeLink} href="/about">
                    <div className={styles.item}>
                        <Image src={person_logo} width={25} height={25} />
                        <p className="nav_item_text">Sobre Mi</p>
                    </div>
                </Link>
                <Link className={activeLink} href="/projects">
                    <div className={styles.item}>
                        <Image src={work_logo} width={25} height={25} />
                        <p className="nav_item_text">Proyectos</p>
                    </div>
                </Link>
                <Link className={activeLink} href="/contact">
                    <div className={styles.item}>
                        <Image src={mail_logo} width={25} height={25} />
                        <p className="nav_item_text">Contacto</p>
                    </div>
                </Link>
            </ul>
        </nav>
    );
};
