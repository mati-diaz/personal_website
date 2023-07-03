import Image from 'next/image';
import styles from '@/styles/About.module.css';
import ScrollToTop from '@/components/ScrollToTop';

export default function About() {
    return (
        <>
            <ScrollToTop />

            <main>
                <h1 className="title">Sobre Mí</h1>

                <p>
                    Soy un desarrollador web fullstack de Argentina con enfoque
                    en el desarrollo backend. He trabajado en proyectos de gran
                    envergadura, donde he demostrado habilidades excepcionales
                    en el trabajo en equipo y una rápida capacidad de
                    aprendizaje.
                </p>
            </main>

            <section>
                <h3 className="subtitle">Conocimientos</h3>
                <ul className={styles.stack}>
                    <li>
                        <Image
                            height={100}
                            width={100}
                            src="/images/stack/Coloured/php.svg"
                            alt="Php Logo"
                        />
                        <p>PHP</p>
                    </li>
                    <li>
                        <Image
                            height={100}
                            width={100}
                            src="/images/stack/Coloured/symfony.svg"
                            alt="Symfony Logo"
                        />
                        <p>Symfony</p>
                    </li>
                    <li>
                        <Image
                            height={100}
                            width={100}
                            src="/images/stack/Coloured/nodejs.svg"
                            alt="NodeJs Logo"
                        />
                        <p>NodeJs</p>
                    </li>
                    <li>
                        <Image
                            height={100}
                            width={100}
                            src="/images/stack/Coloured/express.svg"
                            alt="Express Logo"
                        />
                        <p>Express</p>
                    </li>
                    <li>
                        <Image
                            height={100}
                            width={100}
                            src="/images/stack/Coloured/mysql.svg"
                            alt="MySql Logo"
                        />
                        <p>MySql</p>
                    </li>
                    <li>
                        <Image
                            height={100}
                            width={100}
                            src="/images/stack/Coloured/mongodb.svg"
                            alt="Mongo Logo"
                        />
                        <p>MongoDB</p>
                    </li>
                    <li>
                        <Image
                            height={100}
                            width={100}
                            src="/images/stack/Coloured/git.svg"
                            alt="Git Logo"
                        />
                        <p>Git</p>
                    </li>
                    <li>
                        <Image
                            height={100}
                            width={100}
                            src="/images/stack/Coloured/html.svg"
                            alt="HTML5 Logo"
                        />
                        <p>HTML5</p>
                    </li>
                    <li>
                        <Image
                            height={100}
                            width={100}
                            src="/images/stack/Coloured/css.svg"
                            alt="CSS3 Logo"
                        />
                        <p>CSS3</p>
                    </li>
                    <li>
                        <Image
                            height={100}
                            width={100}
                            src="/images/stack/Coloured/javascript.svg"
                            alt="JavaScript Logo"
                        />
                        <p>JavaScript</p>
                    </li>

                    <li>
                        <Image
                            height={100}
                            width={100}
                            src="/images/stack/Coloured/nextjs.svg"
                            alt="NextJs Logo"
                        />
                        <p>NextJs</p>
                    </li>

                    <li>
                        <Image
                            height={100}
                            width={100}
                            src="/images/stack/Coloured/reactjs.svg"
                            alt="React Logo"
                        />
                        <p>React</p>
                    </li>
                    <li>
                        <Image
                            height={100}
                            width={100}
                            src="/images/stack/Coloured/redux.svg"
                            alt="Redux Logo"
                        />
                        <p>Redux</p>
                    </li>
                    <li>
                        <Image
                            height={100}
                            width={100}
                            src="/images/stack/Coloured/sass.svg"
                            alt="Sass Logo"
                        />
                        <p>Sass</p>
                    </li>
                </ul>
            </section>

            <section>
                <h3 className="subtitle">Cursos y Capacitaciones</h3>

                <ul className={styles.certificates}>
                    <li className={styles.certificate}>
                        <div>
                            <p>Aceleración en NodeJs</p>
                            <p className={styles.experienceExtra}>Alkemy</p>
                        </div>

                        <a
                            href="https://assets.alkemy.org/certificates/auth0%7C613b7668cbd2700069f8ca100/483a66cb-d74f-433a-a551-02df6e1767d8.pdf"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="48"
                                viewBox="0 96 960 960"
                                width="48"
                            >
                                <path d="M180.109 953.196q-30.746 0-54.025-23.28-23.28-23.279-23.28-54.025V276.109q0-30.845 23.28-54.194 23.279-23.35 54.025-23.35h246.869q16.396 0 27.774 11.294 11.378 11.295 11.378 27.49 0 16.196-11.378 27.478t-27.774 11.282H180.109v599.782h599.782V629.022q0-16.396 11.506-27.774 11.505-11.378 27.485-11.378 16.315 0 27.434 11.378t11.119 27.774v246.869q0 30.746-23.35 54.025-23.349 23.28-54.194 23.28H180.109Zm179.239-257.171q-10.522-11.426-11.022-26.6-.5-15.174 10.978-26.838l366.718-366.478H564.283q-15.636 0-26.894-11.506-11.259-11.505-11.259-27.485 0-16.315 11.259-27.434 11.258-11.119 26.894-11.119h254.76q16.131 0 27.262 11.13 11.13 11.131 11.13 27.262v254.76q0 15.636-11.294 26.894-11.295 11.259-27.49 11.259-16.196 0-27.478-11.259-11.282-11.258-11.282-26.894V330.978L413.413 697.696q-10.877 10.478-26.634 10.358-15.757-.119-27.431-12.029Z" />
                            </svg>
                        </a>
                    </li>

                    <li className={styles.certificate}>
                        <div>
                            <p>React</p>
                            <p className={styles.experienceExtra}>Udemy</p>
                        </div>

                        <a
                            href="https://www.udemy.com/certificate/UC-1df06295-afed-422d-a93c-26460ae1efd3/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="48"
                                viewBox="0 96 960 960"
                                width="48"
                            >
                                <path d="M180.109 953.196q-30.746 0-54.025-23.28-23.28-23.279-23.28-54.025V276.109q0-30.845 23.28-54.194 23.279-23.35 54.025-23.35h246.869q16.396 0 27.774 11.294 11.378 11.295 11.378 27.49 0 16.196-11.378 27.478t-27.774 11.282H180.109v599.782h599.782V629.022q0-16.396 11.506-27.774 11.505-11.378 27.485-11.378 16.315 0 27.434 11.378t11.119 27.774v246.869q0 30.746-23.35 54.025-23.349 23.28-54.194 23.28H180.109Zm179.239-257.171q-10.522-11.426-11.022-26.6-.5-15.174 10.978-26.838l366.718-366.478H564.283q-15.636 0-26.894-11.506-11.259-11.505-11.259-27.485 0-16.315 11.259-27.434 11.258-11.119 26.894-11.119h254.76q16.131 0 27.262 11.13 11.13 11.131 11.13 27.262v254.76q0 15.636-11.294 26.894-11.295 11.259-27.49 11.259-16.196 0-27.478-11.259-11.282-11.258-11.282-26.894V330.978L413.413 697.696q-10.877 10.478-26.634 10.358-15.757-.119-27.431-12.029Z" />
                            </svg>
                        </a>
                    </li>

                    <li className={styles.certificate}>
                        <div>
                            <p>NodeJs</p>
                            <p className={styles.experienceExtra}>Udemy</p>
                        </div>

                        <a
                            href="https://www.udemy.com/certificate/UC-49510054a-9dec-4415-92a4-100a18337a188/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="48"
                                viewBox="0 96 960 960"
                                width="48"
                            >
                                <path d="M180.109 953.196q-30.746 0-54.025-23.28-23.28-23.279-23.28-54.025V276.109q0-30.845 23.28-54.194 23.279-23.35 54.025-23.35h246.869q16.396 0 27.774 11.294 11.378 11.295 11.378 27.49 0 16.196-11.378 27.478t-27.774 11.282H180.109v599.782h599.782V629.022q0-16.396 11.506-27.774 11.505-11.378 27.485-11.378 16.315 0 27.434 11.378t11.119 27.774v246.869q0 30.746-23.35 54.025-23.349 23.28-54.194 23.28H180.109Zm179.239-257.171q-10.522-11.426-11.022-26.6-.5-15.174 10.978-26.838l366.718-366.478H564.283q-15.636 0-26.894-11.506-11.259-11.505-11.259-27.485 0-16.315 11.259-27.434 11.258-11.119 26.894-11.119h254.76q16.131 0 27.262 11.13 11.13 11.131 11.13 27.262v254.76q0 15.636-11.294 26.894-11.295 11.259-27.49 11.259-16.196 0-27.478-11.259-11.282-11.258-11.282-26.894V330.978L413.413 697.696q-10.877 10.478-26.634 10.358-15.757-.119-27.431-12.029Z" />
                            </svg>
                        </a>
                    </li>

                    <li className={styles.certificate}>
                        <div>
                            <p>Git + GitHub</p>
                            <p className={styles.experienceExtra}>Udemy</p>
                        </div>

                        <a
                            href="https://www.udemy.com/certificate/UC-c54a7334-791d-44da-9dd7-ad89e6db39d1/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="48"
                                viewBox="0 96 960 960"
                                width="48"
                            >
                                <path d="M180.109 953.196q-30.746 0-54.025-23.28-23.28-23.279-23.28-54.025V276.109q0-30.845 23.28-54.194 23.279-23.35 54.025-23.35h246.869q16.396 0 27.774 11.294 11.378 11.295 11.378 27.49 0 16.196-11.378 27.478t-27.774 11.282H180.109v599.782h599.782V629.022q0-16.396 11.506-27.774 11.505-11.378 27.485-11.378 16.315 0 27.434 11.378t11.119 27.774v246.869q0 30.746-23.35 54.025-23.349 23.28-54.194 23.28H180.109Zm179.239-257.171q-10.522-11.426-11.022-26.6-.5-15.174 10.978-26.838l366.718-366.478H564.283q-15.636 0-26.894-11.506-11.259-11.505-11.259-27.485 0-16.315 11.259-27.434 11.258-11.119 26.894-11.119h254.76q16.131 0 27.262 11.13 11.13 11.131 11.13 27.262v254.76q0 15.636-11.294 26.894-11.295 11.259-27.49 11.259-16.196 0-27.478-11.259-11.282-11.258-11.282-26.894V330.978L413.413 697.696q-10.877 10.478-26.634 10.358-15.757-.119-27.431-12.029Z" />
                            </svg>
                        </a>
                    </li>

                    <li className={styles.certificate}>
                        <div>
                            <p>Symfony 3</p>
                            <p className={styles.experienceExtra}>Udemy</p>
                        </div>

                        <a
                            href="https://www.udemy.com/certificate/UC-f94dd86f-ffad-4a68-8099-2cd235f6c92c/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="48"
                                viewBox="0 96 960 960"
                                width="48"
                            >
                                <path d="M180.109 953.196q-30.746 0-54.025-23.28-23.28-23.279-23.28-54.025V276.109q0-30.845 23.28-54.194 23.279-23.35 54.025-23.35h246.869q16.396 0 27.774 11.294 11.378 11.295 11.378 27.49 0 16.196-11.378 27.478t-27.774 11.282H180.109v599.782h599.782V629.022q0-16.396 11.506-27.774 11.505-11.378 27.485-11.378 16.315 0 27.434 11.378t11.119 27.774v246.869q0 30.746-23.35 54.025-23.349 23.28-54.194 23.28H180.109Zm179.239-257.171q-10.522-11.426-11.022-26.6-.5-15.174 10.978-26.838l366.718-366.478H564.283q-15.636 0-26.894-11.506-11.259-11.505-11.259-27.485 0-16.315 11.259-27.434 11.258-11.119 26.894-11.119h254.76q16.131 0 27.262 11.13 11.13 11.131 11.13 27.262v254.76q0 15.636-11.294 26.894-11.295 11.259-27.49 11.259-16.196 0-27.478-11.259-11.282-11.258-11.282-26.894V330.978L413.413 697.696q-10.877 10.478-26.634 10.358-15.757-.119-27.431-12.029Z" />
                            </svg>
                        </a>
                    </li>
                </ul>
            </section>
        </>
    );
}
