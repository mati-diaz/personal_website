import './contact.css';
import { useForm, ValidationError } from '@formspree/react';

export const Contact = () => {
    const [state, handleSubmit] = useForm("xqkngyza");

    return (
        <div className='page'>
            {
                state.submitting &&
                <p className='animate__animated animate__zoomIn loading-form'>Enviando...</p>
            }
            {
                state.succeeded &&
                <p className='animate__animated animate__zoomIn msg-success'>
                    <span className="material-icons">
                        check_circle_outline
                    </span>
                    Mensaje Enviado
                </p>
            }
            <h2 className='subtitle'>Contacto</h2>
            <div className='contact-content'>
                <div className='contact-content__extras'>
                    <a className='contact-extra' href='https://www.linkedin.com/in/mati-diaz/' target='_blank' rel='noreferrer'>
                        <img className='contact-extra__logo' src='./img/linkedin.png' alt='linkedin logo' />
                        <p className='contact-extra__text'>Linkedin</p>
                    </a>
                    <a className='contact-extra' href='https://github.com/mati-diaz' target='_blank' rel='noreferrer'>
                        <img className='contact-extra__logo' src='./img/github.png' alt='github logo' />
                        <p className='contact-extra__text'>GitHub</p>
                    </a>
                    <a className='contact-extra' href='mailto:matidiazruiz42@gmail.com' target='_blank' rel='noreferrer'>
                        <img className='contact-extra__logo' src='./img/email.png' alt='email logo' />
                        <p className='contact-extra__text'>Correo</p>
                    </a>
                </div>
                <form className='contact-form' onSubmit={ handleSubmit }>
                    <h3 className='contact-form__title'>Enviame un mensaje</h3>
                    <div className='contact-form__inputs'>
                        <input
                            id='name'
                            className='contact-form__input'
                            name='name'
                            placeholder='Nombre'
                            type='text'

                        />
                        <ValidationError 
                            prefix="Name" 
                            field="name"
                            errors={state.errors}
                        />
                        <input
                            id='email'
                            className='contact-form__input'
                            name='email'
                            placeholder='Correo'
                            type='email'
                        />
                        <ValidationError 
                            prefix="Email" 
                            field="email"
                            errors={state.errors}
                        />
                    </div>
                    <textarea
                        id='message'
                        className='contact-form__textarea'
                        name='message'
                        placeholder='Mensaje'
                        rows='10'
                    ></textarea>
                    <ValidationError 
                        prefix="Message" 
                        field="message"
                        errors={state.errors}
                    />
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
