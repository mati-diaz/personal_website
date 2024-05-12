import Image from 'next/image';
import Layout from '@/components/Layout';

export default function Projects() {
    const item = {
        hidden: { opacity: 0 },
        show: { opacity: 1 },
    };

    return (
        <Layout>
            <main className="main">
                <h1 className="title">Proyectos</h1>

                <div className="projects">
                    <div className="project">
                        <div>
                            <div className="imageMain">
                                <Image
                                    src="/images/projects/pr-3.jpg"
                                    width={1000}
                                    height={1000}
                                    alt="Project Image"
                                    placeholder="empty"
                                    priority
                                />
                            </div>
                            <div className="body">
                                <p className="project-title">Blog App</p>
                                <div className="tags">
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
                            <button className="button">
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

                    <div className="project">
                        <div>
                            <div className="imageMain">
                                <Image
                                    src="/images/projects/pr-5.jpg"
                                    width={1000}
                                    height={1000}
                                    alt="Project Image"
                                    placeholder="empty"
                                    priority
                                />
                            </div>
                            <div className="body">
                                <p className="project-title">API ONG</p>
                                <div className="tags">
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
                            <button className="button">
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

                    <div className="project">
                        <div>
                            <div className="imageMain">
                                <Image
                                    src="/images/projects/nevicare.png"
                                    width={1000}
                                    height={1000}
                                    alt="Project Image"
                                    placeholder="empty"
                                    priority
                                />
                            </div>
                            <div className="body">
                                <p className="project-title">Landing Page</p>
                                <div className="tags">
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
                            <button className="button">
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
        </Layout>
    );
}
