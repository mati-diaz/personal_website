import Image from 'next/image';
import Link from 'next/link';
import Layout from '@/components/Layout';

export default function Home() {
    return (
        <Layout>
            <div className="home">
                <main className="main">
                    <h1 className="name">
                        Matias
                        <br />
                        <span>Diaz Ruiz</span>
                    </h1>

                    <p className="description">
                        Desarrollador de Software
                    </p>

                    <Link href="/contact">
                        <button className="contact">Contáctame</button>
                    </Link>

                    <div className="buttons">
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

                <div className="decoration">
                    <Image
                        src="/images/code.svg"
                        width={1000}
                        height={1000}
                        alt="Decoration"
                    />
                </div>
            </div>
        </Layout>
    );
}
