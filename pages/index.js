import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/pages/Home.module.css';

import decoration from '../assets/images/others/code.svg';
import github_logo from '../assets/images/icons/github.png';
import linkedin_logo from '../assets/images/icons/linkedin.png';
import Head from 'next/head';

export default function HomePage() {
    return (
        <div className={styles.home}>
            <Head>
                <title>Matias Diaz Ruiz - Inicio</title>
            </Head>
            <div className={styles.content}>
                <h1>
                    Matias
                    <br />
                    Diaz Ruiz
                </h1>
                <p>Desarrollador Web Frontend</p>
                <Link href="/contact">
                    <button className={styles.contact}>Contactame</button>
                </Link>
                <div className={styles.buttons}>
                    <a
                        href="https://github.com/mati-diaz"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Image
                            src={github_logo}
                            width={30}
                            height={30}
                            alt="Github Logo"
                        />
                        GitHub
                    </a>
                    <a
                        href="https://www.linkedin.com/in/mati-diaz/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Image
                            src={linkedin_logo}
                            width={30}
                            height={30}
                            alt="Linkedin Logo"
                        />
                        Linkedin
                    </a>
                </div>
            </div>
            <div className={styles.decoration}>
                <Image src={decoration} width={500} height={500} alt="" />
            </div>
        </div>
    );
}
