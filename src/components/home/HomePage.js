import { Link } from 'react-router-dom';
import { Transition } from '../transition/Transition';
import './home.css';

export const HomePage = () => {
    return (
        <div className='page' id='home'>
            <Transition title='Inicio' />
            <div className='home__content'>
                <h1 className='name'>
                    Matias<br />Diaz Ruiz
                </h1>
                <p className='info'>Desarrollador web FullStack</p>
                <Link to='/contact' className='contact_btn'>Contactame</Link>
                <div className='home__buttons'>
                    <a href='https://github.com/mati-diaz' target='_blank' rel='noreferrer'>
                        <img src='./img/github.png' alt='github logo' />
                        GitHub
                    </a>
                    <a href='https://www.linkedin.com/in/mati-diaz/' target='_blank' rel='noreferrer'>
                        <img src='./img/linkedin.png' alt='linkedin logo' />
                        Linkedin
                    </a>
                </div>
            </div>
            <div className='home__decoration'>
                <img className='home__img' src="/img/code.svg" alt="" />
            </div>
        </div>
    )
}
