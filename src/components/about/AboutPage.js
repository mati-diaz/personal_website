import { Transition } from '../transition/Transition';
import stack from '../../data/stack.json';
import './about.css';

export const AboutPage = () => {
    return (
        <div className='page'>
            <Transition title='Sobre Mí' />
            <h2 className='subtitle'>Sobre Mí</h2>
            <div className='about'>
                <p className='about__info'>Hola, soy un desarrollador fullstack junior en constante formación, me gusta poner en practica las tecnologias que aprendo creando proyectos utiles en la vida real. Actualmente me estoy capacitando en el uso del framework Next.Js y estoy en busca de oportunidades y/o proyectos donde pueda aplicar mis conocimientos.</p>
                <div className='about__stack'>
                    <p>Tecnologias con las que trabajo</p>
                    <ul className='stack-list'>
                        {
                            stack.map(technology => (
                                <li className='stack-list__item' key={ technology.name }>
                                    <img
                                        className='stack-list__img'
                                        src={ `/img/${technology.img}.png` }
                                        alt={ `${technology.img} logo` }
                                    />
                                    <p>{ technology.name }</p>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className='about__certificates'>
                    
                </div>
            </div>
        </div>
    )
}
