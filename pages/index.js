import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/pages/Home.module.css';

import decoration from '../assets/images/others/code.svg';
import github_logo from '../assets/images/icons/github.png';
import linkedin_logo from '../assets/images/icons/linkedin.png';

export default function HomePage() {
    return (
        <div className={styles.home}>
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
                        <Image src={github_logo} width={30} height={30} />
                        GitHub
                    </a>
                    <a
                        href="https://www.linkedin.com/in/mati-diaz/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Image src={linkedin_logo} width={30} height={30} />
                        Linkedin
                    </a>
                </div>
            </div>
            <div className={styles.decoration}>
                <Image src={decoration}  width={500} height={500} />
                {/* <img className="home__img" src="/img/code.svg" alt="" /> */}
            </div>
        </div>
    );
}
