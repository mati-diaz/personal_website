import certificates from '../assets/data/certificates.json';
import stack from '../assets/data/stack.json';
import styles from '../styles/pages/About.module.css';
import Image from 'next/image';

import js_logo from '../assets/images/stack/js.png';
import ts_logo from '../assets/images/stack/ts.png';
import css_logo from '../assets/images/stack/css.png';
import git_logo from '../assets/images/stack/git.png';
import html_logo from '../assets/images/stack/html.png';
import node_logo from '../assets/images/stack/node.png';
import sass_logo from '../assets/images/stack/sass.png';
import mongo_logo from '../assets/images/stack/mongo.png';
import mysql_logo from '../assets/images/stack/mysql.png';
import react_logo from '../assets/images/stack/react.png';
import redux_logo from '../assets/images/stack/redux.png';
import nextjs_logo from '../assets/images/stack/nextjs.png';
import express_logo from '../assets/images/stack/express.png';
import alkemy_logo from '../assets/images/others/alkemy.jpg';
import udemy_logo from '../assets/images/others/udemy.jpg';
import link_logo from '../assets/images/icons/link.png';
import Head from 'next/head';

export default function AboutPage() {
    const getImage = (name) => {
        switch (name) {
            case 'js':
                return js_logo;
            case 'ts':
                return ts_logo;
            case 'css':
                return css_logo;
            case 'git':
                return git_logo;
            case 'html':
                return html_logo;
            case 'node':
                return node_logo;
            case 'sass':
                return sass_logo;
            case 'mongo':
                return mongo_logo;
            case 'mysql':
                return mysql_logo;
            case 'react':
                return react_logo;
            case 'redux':
                return redux_logo;
            case 'nextjs':
                return nextjs_logo;
            case 'express':
                return express_logo;
            case 'alkemy':
                return alkemy_logo;
            case 'udemy':
                return udemy_logo;
        }
    };

    return (
        <div>
            <Head>
                <title>Matias Diaz Ruiz - Sobre</title>
            </Head>
            <h2 className="subtitle">Sobre Mí</h2>
            <div className={styles.about}>
                <p className={styles.info}>
                    Hola, soy un desarrollador web junior en constante
                    formación, me gusta poner en practica las tecnologias que
                    aprendo creando proyectos utiles en la vida real.
                    Actualmente me estoy capacitando en el uso del framework
                    Next.Js y estoy en busca de oportunidades y/o proyectos
                    donde pueda aplicar mis conocimientos.
                </p>
                <div className={styles.stack}>
                    <p>Tecnologias con las que trabajo</p>
                    <ul>
                        {stack.map((technology) => (
                            <li key={technology.name}>
                                <Image
                                    src={getImage(technology.img)}
                                    height={40}
                                    width={40}
                                    alt={`${technology.name} Logo`}
                                />
                                <p>{technology.name}</p>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={styles.certificates}>
                    <p>Mis certificados</p>
                    <ul>
                        {certificates.map((certificate) => (
                            <li
                                key={certificate.name}
                                className={styles.certificate}
                            >
                                <div>
                                    <Image
                                        src={getImage(certificate.img)}
                                        height={35}
                                        width={35}
                                        alt={`${certificate.name} Logo`}
                                    />
                                    <p>{certificate.name}</p>
                                </div>
                                <a
                                    href={certificate.link}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <Image
                                        src={link_logo}
                                        height={25}
                                        width={25}
                                        alt="Abrir"
                                    />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
