import certificates from '../assets/data/certificates.json';
import stack from '../assets/data/stack.json';
import styles from '../styles/pages/About.module.css';
import Image from 'next/image';

export default function AboutPage() {
    return (
        <div>
            <h2 className='subtitle'>Sobre Mí</h2>
            <div className={styles.about}>
                <p className={styles.info}>Hola, soy un desarrollador web junior en constante formación, me gusta poner en practica las tecnologias que aprendo creando proyectos utiles en la vida real. Actualmente me estoy capacitando en el uso del framework Next.Js y estoy en busca de oportunidades y/o proyectos donde pueda aplicar mis conocimientos.</p>
                <div className={styles.stack}>
                    <p>Tecnologias con las que trabajo</p>
                    <ul>
                        {
                            stack.map(technology => (
                                <li key={ technology.name }>
                                    <Image  />
                                    <img
                                        src={ `/img/${technology.img}.png` }
                                        alt={ `${technology.img} logo` }
                                    />
                                    <p>{ technology.name }</p>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className={styles.certificates}>
                    <p>Mis certificados</p>
                    <ul>
                        {
                            certificates.map(certificate => (
                                <li key={ certificate.name } className={styles.certificate}>
                                    <div>
                                        <img src={ `/img/${certificate.img}.jpg` } alt="" />
                                        <p>{ certificate.name }</p>
                                    </div>
                                    <a href={ certificate.link } target='_blank' rel='noreferrer'>
                                        Ver
                                        <span className='material-symbols-outlined'>
                                            open_in_new
                                        </span>
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}
