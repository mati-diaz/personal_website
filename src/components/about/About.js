import './about.css';

export const About = () => {
    return (
        <section id='about'>
            <h2 className='subtitle'>Sobre Mi</h2>
            <div className='about-content'>
                <p className='about-content__info'>Hola, soy un desarrollador fullstack junior en constante formación, me gusta poner en practica las tecnologias que aprendo creando proyectos utiles en la vida real. Actualmente me estoy capacitando en el uso del framework Next.Js y estoy en busca de oportunidades y/o proyectos donde pueda aplicar mis conocimientos.</p>
                <div className='about-content__technologies'>
                    <p>Tecnologias con las que trabajo:</p>
                    <ul className='technologies-list'>
                        <li className='technologies-list__item'>
                            <img className='technologies-list__img' src='./img/html.png' alt='html logo' />
                            <p className='technologies-list__overlay'>
                                HTML5
                            </p>
                        </li>
                        <li className='technologies-list__item'>
                            <img className='technologies-list__img' src='./img/css.png' alt='css logo' />
                            <p className='technologies-list__overlay'>
                                CSS3
                            </p>
                        </li>
                        <li className='technologies-list__item'>
                            <img className='technologies-list__img' src='./img/js.png' alt='js logo' />
                            <p className='technologies-list__overlay'>
                                JavaScript
                            </p>
                        </li>
                        <li className='technologies-list__item'>
                            <img className='technologies-list__img' src='./img/sass.png' alt='sass logo' />
                            <p className='technologies-list__overlay'>
                                Sass
                            </p>
                        </li>
                        <li className='technologies-list__item'>
                            <img className='technologies-list__img' src='./img/react.png' alt='react logo' />
                            <p className='technologies-list__overlay'>
                                React
                            </p>
                        </li>
                        <li className='technologies-list__item'>
                            <img className='technologies-list__img' src='./img/redux.png' alt='redux logo' />
                            <p className='technologies-list__overlay'>
                                Redux
                            </p>
                        </li>
                        <li className='technologies-list__item'>
                            <img className='technologies-list__img' src='./img/node.png' alt='node logo' />
                            <p className='technologies-list__overlay'>
                                NodeJs
                            </p>
                        </li>
                        <li className='technologies-list__item'>
                            <img className='technologies-list__img' src='./img/express.png' alt='express logo' />
                            <p className='technologies-list__overlay'>
                                Express
                            </p>
                        </li>
                        <li className='technologies-list__item'>
                            <img className='technologies-list__img' src='./img/mongo.png' alt='mongo logo' />
                            <p className='technologies-list__overlay'>
                                MongoDb
                            </p>
                        </li>
                        <li className='technologies-list__item'>
                            <img className='technologies-list__img' src='./img/mysql.png' alt='mysql logo' />
                            <p className='technologies-list__overlay'>
                                MySql
                            </p>
                        </li>
                        <li className='technologies-list__item'>
                            <img className='technologies-list__img' src='./img/git.png' alt='git logo' />
                            <p className='technologies-list__overlay'>
                                Git
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}
