import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/Home.module.css';

export default function Home() {
    return (
        <>
            <div className={styles.home}>
                <main className={styles.main}>
                    <h1 className={styles.name}>
                        Matias
                        <br />
                        <span>Diaz Ruiz</span>
                    </h1>

                    <p className={styles.description}>
                        Desarrollador Web FullStack
                    </p>

                    <Link href="/contact">
                        <button className={styles.contact}>Contáctame</button>
                    </Link>

                    <div className={styles.buttons}>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://github.com/mati-diaz"
                        >
                            <Image
                                alt="Github Logo"
                                width={30}
                                height={30}
                                src="/images/socials/github.png"
                            />
                            <p>GitHub</p>
                        </a>

                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://www.linkedin.com/in/mati-diaz/"
                        >
                            <Image
                                alt="Linkedin Logo"
                                width={30}
                                height={30}
                                src="/images/socials/linkedin.png"
                            />
                            <p>Linkedin</p>
                        </a>
                    </div>
                </main>

                <div className={styles.decoration}>
                    <Image
                        src="/images/code.svg"
                        width={1000}
                        height={1000}
                        alt="Decoration"
                    />
                </div>
            </div>
        </>
    );
}
