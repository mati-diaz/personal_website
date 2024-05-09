import Image from 'next/image';
import styles from '@/styles/About.module.css';
import { motion } from 'framer-motion';

export default function About() {
    const item = {
        hidden: { opacity: 0 },
        show: { opacity: 1 },
    };

    return (
        <>
            <main>
                <h1 className="title">Sobre Mí</h1>

                <motion.p variants={item} className={styles.presentation}>
                    Soy un desarrollador web fullstack de Argentina con enfoque
                    en el desarrollo backend. He trabajado en proyectos de gran
                    envergadura, donde he demostrado habilidades excepcionales
                    en el trabajo en equipo y una rápida capacidad de
                    aprendizaje.
                </motion.p>
            </main>

            <section>
                <h3 className="subtitle">Conocimientos</h3>
                <ul className={styles.stack}>
                    <motion.li variants={item}>
                        <Image
                            height={100}
                            width={100}
                            src="/images/stack/White/php.svg"
                            alt="Php Logo"
                        />
                        <p>PHP</p>
                    </motion.li>
                    <motion.li variants={item}>
                        <Image
                            height={100}
                            width={100}
                            src="/images/stack/White/symfony.svg"
                            alt="Symfony Logo"
                        />
                        <p>Symfony</p>
                    </motion.li>
                    <motion.li variants={item}>
                        <Image
                            height={100}
                            width={100}
                            src="/images/stack/White/nodejs.svg"
                            alt="NodeJs Logo"
                        />
                        <p>NodeJs</p>
                    </motion.li>
                    <motion.li variants={item}>
                        <Image
                            height={100}
                            width={100}
                            src="/images/stack/White/express.svg"
                            alt="Express Logo"
                        />
                        <p>Express</p>
                    </motion.li>
                    <motion.li variants={item}>
                        <Image
                            height={100}
                            width={100}
                            src="/images/stack/White/mysql.svg"
                            alt="MySql Logo"
                        />
                        <p>MySql</p>
                    </motion.li>
                    <motion.li variants={item}>
                        <Image
                            height={100}
                            width={100}
                            src="/images/stack/White/mongodb.svg"
                            alt="Mongo Logo"
                        />
                        <p>MongoDB</p>
                    </motion.li>
                    <motion.li variants={item}>
                        <Image
                            height={100}
                            width={100}
                            src="/images/stack/White/git.svg"
                            alt="Git Logo"
                        />
                        <p>Git</p>
                    </motion.li>
                    <motion.li variants={item}>
                        <Image
                            height={100}
                            width={100}
                            src="/images/stack/White/html.svg"
                            alt="HTML5 Logo"
                        />
                        <p>HTML5</p>
                    </motion.li>
                    <motion.li variants={item}>
                        <Image
                            height={100}
                            width={100}
                            src="/images/stack/White/css.svg"
                            alt="CSS3 Logo"
                        />
                        <p>CSS3</p>
                    </motion.li>
                    <motion.li variants={item}>
                        <Image
                            height={100}
                            width={100}
                            src="/images/stack/White/javascript.svg"
                            alt="JavaScript Logo"
                        />
                        <p>JavaScript</p>
                    </motion.li>

                    <motion.li variants={item}>
                        <Image
                            height={100}
                            width={100}
                            src="/images/stack/White/typescript.svg"
                            alt="TypeScript Logo"
                        />
                        <p>JavaScript</p>
                    </motion.li>

                    <motion.li variants={item}>
                        <Image
                            height={100}
                            width={100}
                            src="/images/stack/White/nextjs.svg"
                            alt="NextJs Logo"
                        />
                        <p>NextJs</p>
                    </motion.li>

                    <motion.li variants={item}>
                        <Image
                            height={100}
                            width={100}
                            src="/images/stack/White/reactjs.svg"
                            alt="React Logo"
                        />
                        <p>React</p>
                    </motion.li>
                    <motion.li variants={item}>
                        <Image
                            height={100}
                            width={100}
                            src="/images/stack/White/redux.svg"
                            alt="Redux Logo"
                        />
                        <p>Redux</p>
                    </motion.li>
                    <motion.li variants={item}>
                        <Image
                            height={100}
                            width={100}
                            src="/images/stack/White/sass.svg"
                            alt="Sass Logo"
                        />
                        <p>Sass</p>
                    </motion.li>
                    <motion.li variants={item}>
                        <Image
                            height={100}
                            width={100}
                            src="/images/stack/White/laravel.svg"
                            alt="Laravel Logo"
                        />
                        <p>Laravel</p>
                    </motion.li>
                    <motion.li variants={item}>
                        <Image
                            height={100}
                            width={100}
                            src="/images/stack/White/bootstrap.svg"
                            alt="Bootstrap Logo"
                        />
                        <p>Bootstrap</p>
                    </motion.li>
                    <motion.li variants={item}>
                        <Image
                            height={100}
                            width={100}
                            src="/images/stack/White/jquery.svg"
                            alt="jQuery Logo"
                        />
                        <p>jQuery</p>
                    </motion.li>
                    <motion.li variants={item}>
                        <Image
                            height={100}
                            width={100}
                            src="/images/stack/White/framer.svg"
                            alt="Framer Motion Logo"
                        />
                        <p>Motion</p>
                    </motion.li>
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
                            href="https://assets.alkemy.org/certificates/auth0|613b7668cbd2700069f8ca40/ACCELERATION_CERTIFICATE/c2e7ec06-d80c-4a0d-91be-cae34e4d492a.png"
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
                            href="http://ude.my/UC-1df06295-afed-422d-a93c-26460ae1efd3"
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
                            href="http://ude.my/UC-4954054a-9dec-4415-92a4-40a18337a188"
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
                            href="http://ude.my/UC-c54a7334-791d-44da-9dd7-ad89e6db39d1"
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
                            href="http://ude.my/UC-f94dd86f-ffad-4a68-8099-2cd235f6c92c"
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
