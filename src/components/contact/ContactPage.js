import './contact.css';
import { Transition } from '../transition/Transition';
import { useState } from 'react';

export const ContactPage = () => {
    const [state, setState] = useState({
        name: '',
        email: '',
        message: '',
        error: false,
        loading: false,
        nameMissing: false,
        emailMissing: false,
        messageMissing: false
    });

    const {
        name,
        email,
        message,
        nameMissing,
        emailMissing,
        messageMissing,
        error,
        loading
    } = state;

    const handleInputChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmitForm = (e) => {
        e.preventDefault();
        const missings = {
            nameMissing: !name,
            emailMissing: !email,
            messageMissing: !message
        }
        if(!name || !email || !message) {
            return setState({
                ...state,
                ...missings
            });
        }
        console.log('a')
        // if (!name || !email || !message) 
        // fetch('https://formspree.io/f/xqkngyza', {
        //     method: 'POST',

        // });
    }

    return (
        <div className='page'>
            {
                (nameMissing || emailMissing || messageMissing) &&
                <p className='animate__animated animate__zoomIn loading-form'>Faltan campos por completar</p>
            }
            {
                state.submitting &&
                <p className='animate__animated animate__zoomIn loading-form'>Enviando...</p>
            }
            {
                state.succeeded &&
                <p className='animate__animated animate__zoomIn msg-success'>
                    <span className="material-symbols-outlined">check_circle_outline</span>
                    Mensaje Enviado
                </p>
            }
            <Transition title='Contacto' />
            <h2 className='subtitle'>Contacto</h2>
            <div className='contact-content'>
                <div className='contact-content__extras'>
                    <a
                        className='contact-extra'
                        href='https://www.linkedin.com/in/mati-diaz/'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <img className='contact-extra__logo' src='./img/linkedin.png' alt='linkedin logo' />
                        <p className='contact-extra__text'>Linkedin</p>
                    </a>
                    <a
                        className='contact-extra'
                        href='https://github.com/mati-diaz'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <img className='contact-extra__logo' src='./img/github.png' alt='github logo' />
                        <p className='contact-extra__text'>GitHub</p>
                    </a>
                    <a
                        className='contact-extra'
                        href='mailto:matidiazruiz42@gmail.com'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <img className='contact-extra__logo' src='./img/email.png' alt='email logo' />
                        <p className='contact-extra__text'>Correo</p>
                    </a>
                </div>
                <form
                    className='contact-form'
                    onSubmit={ handleSubmitForm }
                >
                    <h3 className='contact-form__title'>Enviame un mensaje</h3>
                    <div className='contact-form__inputs'>
                        <input
                            id='name'
                            className={ !nameMissing ? 'contact-form__input' : 'contact-form__input missing' }
                            name='name'
                            placeholder='Nombre'
                            type='text'
                            value={ name }
                            onChange={ handleInputChange }
                        />
                        <input
                            id='email'
                            className={ !emailMissing ? 'contact-form__input' : 'contact-form__input missing' }
                            name='email'
                            placeholder='Correo'
                            type='email'
                            value={ email }
                            onChange={ handleInputChange }
                        />
                    </div>
                    <textarea
                        id='message'
                        className={ !messageMissing ? 'contact-form__textarea' : 'contact-form__textarea missing' }
                        name='message'
                        placeholder='Mensaje'
                        rows='10'
                        value={ message }
                        onChange={ handleInputChange }
                    ></textarea>
                    <div className='center'>
                        <button
                            className='contact-form__button'
                            type='submit'
                            disabled={state.submitting}
                        >Enviar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
