import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Projects.module.css';
import ScrollToTop from '@/components/ScrollToTop';

export default function Projects() {
    return (
        <>
            <ScrollToTop />

            <Head>
                <title>Matias Diaz - Projects</title>
            </Head>
            <main className={styles.main}>
                <h1 className="title">Proyectos</h1>
                
                <div className={styles.projects}>
                    <div className={styles.project}>
                        <div>
                            <div className={styles.imageMain}>
                                <Image src='/projects/blogapp.png' width={1000} height={1000} alt='Project Image' placeholder='empty' priority />
                            </div>
                            <div>
                                <p className={styles.title}>Test title for my app</p>
                                <div className={styles.tags}>
                                    <p>PHP</p>
                                    <p>MySQL</p>
                                    <p>Symfony</p>
                                </div>
                                <p className={styles.description}>Laborum laboris sit qui veniam aliquip labore cillum enim culpa tempor. Irure dolor occaecat et occaecat nisi occaecat duis laborum incididunt amet voluptate. Nisi duis cillum laboris consequat laboris nulla dolor nulla.</p>
                            </div>
                        </div>
                        <button className={styles.button}>
                            <Image src='/socials/github.png' width={50} height={50} alt='GitHub Logo' />
                            <p>Ver</p>
                        </button>
                    </div>

                    <div className={styles.project}>
                        <div>
                            <div className={styles.imageMain}>
                                <Image src='/projects/blogapp.png' width={1000} height={1000} alt='Project Image' placeholder='empty' priority />
                            </div>
                            <div>
                                <p className={styles.title}>Test title for my app</p>
                                <div className={styles.tags}>
                                    <p>PHP</p>
                                    <p>MySQL</p>
                                    <p>Symfony</p>
                                </div>
                                <p className={styles.description}>Laborum laboris sit qui veniam aliquip labore cillum enim culpa tempor. Irure dolor occaecat et occaecat nisi occaecat duis laborum incididunt amet voluptate. Nisi duis cillum laboris consequat laboris nulla dolor nulla.</p>
                            </div>
                        </div>
                        <button className={styles.button}>
                            <Image src='/socials/github.png' width={50} height={50} alt='GitHub Logo' />
                            <p>Ver</p>
                        </button>
                    </div>

                    <div className={styles.project}>
                        <div>
                            <div className={styles.imageMain}>
                                <Image src='/projects/blogapp.png' width={1000} height={1000} alt='Project Image' placeholder='empty' priority />
                            </div>
                            <div>
                                <p className={styles.title}>Test title for my app</p>
                                <div className={styles.tags}>
                                    <p>PHP</p>
                                    <p>MySQL</p>
                                    <p>Symfony</p>
                                </div>
                                <p className={styles.description}>Laborum laboris sit qui veniam aliquip labore cillum enim culpa tempor. Irure dolor occaecat et occaecat nisi occaecat duis laborum incididunt amet voluptate. Nisi duis cillum laboris consequat laboris nulla dolor nulla.</p>
                            </div>
                        </div>
                        <button className={styles.button}>
                            <Image src='/socials/github.png' width={50} height={50} alt='GitHub Logo' />
                            <p>Ver</p>
                        </button>
                    </div>

                    <div className={styles.project}>
                        <div>
                            <div className={styles.imageMain}>
                                <Image src='/projects/blogapp.png' width={1000} height={1000} alt='Project Image' placeholder='empty' priority />
                            </div>
                            <div>
                                <p className={styles.title}>Test title for my app</p>
                                <div className={styles.tags}>
                                    <p>PHP</p>
                                    <p>MySQL</p>
                                    <p>Symfony</p>
                                </div>
                                <p className={styles.description}>Laborum laboris sit qui veniam aliquip labore cillum enim culpa tempor. Irure dolor occaecat et occaecat borum laboris sit qui veniam aliquip labore cillum enim culpa tempor. Irure dolor occaecat et occaecat borum laboris sit qui veniam aliquip labore cillum enim culpa tempor. Irure dolor occaecat et occaecat nisi occaecat duis laborum incididunt amet voluptate. Nisi duis cillum laboris consequat laboris nulla dolor nulla.</p>
                            </div>
                        </div>
                        <button className={styles.button}>
                            <Image src='/socials/github.png' width={50} height={50} alt='GitHub Logo' />
                            <p>Ver</p>
                        </button>
                    </div>

                    <div className={styles.project}>
                        <div>
                            <div className={styles.imageMain}>
                                <Image src='/projects/blogapp.png' width={1000} height={1000} alt='Project Image' placeholder='empty' priority />
                            </div>
                            <div>
                                <p className={styles.title}>Test title for my app</p>
                                <div className={styles.tags}>
                                    <p>PHP</p>
                                    <p>MySQL</p>
                                    <p>Symfony</p>
                                </div>
                                <p className={styles.description}>laboris consequat laboris nulla dolor nulla.</p>
                            </div>
                        </div>
                        <button className={styles.button}>
                            <Image src='/socials/github.png' width={50} height={50} alt='GitHub Logo' />
                            <p>Ver</p>
                        </button>
                    </div>
                </div>
            </main>
        </>
    );
}
