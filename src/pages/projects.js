import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Projects.module.css';
import ScrollToTop from '@/components/ScrollToTop';

export default function Projects() {
    return (
        <>
            <ScrollToTop />

            <main className={styles.main}>
                <h1 className="title">Proyectos</h1>

                <div className={styles.projects}>
                    <div className={styles.project}>
                        <div>
                            <div className={styles.imageMain}>
                                <Image
                                    src="/images/projects/pr-3.jpg"
                                    width={1000}
                                    height={1000}
                                    alt="Project Image"
                                    placeholder="empty"
                                    priority
                                />
                            </div>
                            <div className={styles.body}>
                                <p className={styles.title}>Blog App</p>
                                <div className={styles.tags}>
                                    <p>Express</p>
                                    <p>NodeJs</p>
                                    <p>MongoDB</p>
                                    <p>AWS S3</p>
                                </div>
                            </div>
                        </div>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://github.com/mati-diaz/blog-app-backend"
                        >
                            <button className={styles.button}>
                                <Image
                                    src="/images/socials/github.png"
                                    width={50}
                                    height={50}
                                    alt="GitHub Logo"
                                />
                                <p>Ver Codigo</p>
                            </button>
                        </a>
                    </div>

                    <div className={styles.project}>
                        <div>
                            <div className={styles.imageMain}>
                                <Image
                                    src="/images/projects/pr-5.jpg"
                                    width={1000}
                                    height={1000}
                                    alt="Project Image"
                                    placeholder="empty"
                                    priority
                                />
                            </div>
                            <div className={styles.body}>
                                <p className={styles.title}>API ONG</p>
                                <div className={styles.tags}>
                                    <p>NodeJs</p>
                                    <p>Express</p>
                                    <p>MySQL</p>
                                    <p>AWS S3</p>
                                    <p>Sequelize</p>
                                </div>
                            </div>
                        </div>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://github.com/alkemyTech/OT-95-Server"
                        >
                            <button className={styles.button}>
                                <Image
                                    src="/images/socials/github.png"
                                    width={50}
                                    height={50}
                                    alt="GitHub Logo"
                                />
                                <p>Ver Codigo</p>
                            </button>
                        </a>
                    </div>

                    <div className={styles.project}>
                        <div>
                            <div className={styles.imageMain}>
                                <Image
                                    src="/images/projects/nevicare.png"
                                    width={1000}
                                    height={1000}
                                    alt="Project Image"
                                    placeholder="empty"
                                    priority
                                />
                            </div>
                            <div className={styles.body}>
                                <p className={styles.title}>Landing Page</p>
                                <div className={styles.tags}>
                                    <p>HTML5</p>
                                    <p>CSS3</p>
                                    <p>JavaScript</p>
                                </div>
                            </div>
                        </div>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://github.com/mati-diaz/Nevicare"
                        >
                            <button className={styles.button}>
                                <Image
                                    src="/images/socials/github.png"
                                    width={50}
                                    height={50}
                                    alt="GitHub Logo"
                                />
                                <p>Ver Codigo</p>
                            </button>
                        </a>
                    </div>
                </div>
            </main>
        </>
    );
}
