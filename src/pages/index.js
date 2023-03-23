import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/Home.module.css';
import ScrollToTop from '@/components/ScrollToTop';

export default function Home() {
    return (
        <>
            <ScrollToTop />

            <Head>
                <title>Matias Diaz - Web Developer</title>
            </Head>

            <div className={styles.home}>
                <main className={styles.main}>
                    <h1>Matias<br />Diaz Ruiz</h1>

                    <p>Desarrollador Web FullStack</p>

                    <Link href="/contact">
                        <button className={styles.contact}>Contáctame</button>
                    </Link>

                    <div className={styles.buttons}>
                        <a target="_blank" rel="noreferrer" href="https://github.com/mati-diaz">
                            <Image alt="Github Logo" width={30} height={30} src='/socials/github.png' />
                            <p>GitHub</p>
                        </a>
                        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/mati-diaz/">
                            <Image alt="Linkedin Logo" width={30} height={30} src='/socials/linkedin.png' />
                            <p>Linkedin</p>
                        </a>
                    </div>
                </main>

                <div className={styles.decoration}>
                    <Image src='/code.svg' width={500} height={500} alt="" />
                </div>
            </div>
        </>
    );
}