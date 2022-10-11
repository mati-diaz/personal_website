import { useState } from 'react';
import Image from 'next/image';
import styles from '../styles/pages/Contact.module.css';

import github_logo from '../assets/images/icons/github.png';
import linkedin_logo from '../assets/images/icons/linkedin.png';
import mail_logo from '../assets/images/icons/email.png';
import Head from 'next/head';

export default function ContactPage() {
    const [state, setState] = useState({
        name: '',
        email: '',
        message: '',
        success: false,
        error: false,
        loading: false,
        nameMissing: false,
        emailMissing: false,
        messageMissing: false,
    });

    const {
        name,
        email,
        message,
        nameMissing,
        emailMissing,
        messageMissing,
        success,
        error,
        loading,
    } = state;

    const handleInputChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmitForm = async (e) => {
        e.preventDefault();
        const missings = {
            nameMissing: !name,
            emailMissing: !email,
            messageMissing: !message,
        };
        if (!name || !email || !message) {
            return setState({
                ...state,
                ...missings,
            });
        }
        setState({
            ...state,
            ...missings,
            loading: true,
        });

        try {
            const rawRes = await fetch('https://formspree.io/f/xqkngyza', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, message }),
            });
            const res = await rawRes.json();
            if (res.ok) {
                setState({
                    ...state,
                    ...missings,
                    loading: false,
                    success: true,
                });
            } else {
                setState({
                    ...state,
                    loading: false,
                    error: true,
                });
            }
        } catch (error) {
            setState({
                ...state,
                ...missings,
                loading: false,
                error: true,
            });
        }
        setTimeout(() => {
            setState({
                ...state,
                error: false,
                success: false,
            });
        }, 4000);
    };

    return (
        <div>
            <Head>
                <title>Matias Diaz Ruiz - Contacto</title>
            </Head>
            {(nameMissing || emailMissing || messageMissing) && (
                <p className="animate__animated animate__zoomIn msg msg__danger">
                    Faltan campos por completar
                </p>
            )}
            {loading && (
                <p className="animate__animated animate__zoomIn msg msg__success">
                    Enviando...
                </p>
            )}
            {success && (
                <p className="animate__animated animate__zoomIn msg msg__success">
                    <span className="material-symbols-outlined">
                        check_circle_outline
                    </span>
                    Mensaje Enviado
                </p>
            )}
            {error && (
                <p className="animate__animated animate__zoomIn msg msg__danger">
                    Error
                </p>
            )}
            <h2 className="subtitle">Contacto</h2>
            <div className={styles.contact}>
                <div className={styles.extras}>
                    <a
                        href="https://github.com/mati-diaz"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Image
                            src={github_logo}
                            width={30}
                            height={30}
                            alt="GitHub Logo"
                        />
                        <p>GitHub</p>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/mati-diaz/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Image
                            src={linkedin_logo}
                            width={30}
                            height={30}
                            alt="Linkedin Logo"
                        />
                        <p>Linkedin</p>
                    </a>
                    <a
                        href="mailto:matidiazruiz42@gmail.com"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Image
                            src={mail_logo}
                            width={30}
                            height={30}
                            alt="Mail Logo"
                        />
                        <p>Correo</p>
                    </a>
                </div>
                <form className={styles.form} onSubmit={handleSubmitForm}>
                    <h3>Enviame un mensaje</h3>
                    <div className={styles.inputs}>
                        <input
                            id="name"
                            name="name"
                            placeholder="Nombre"
                            type="text"
                            value={name}
                            onChange={handleInputChange}
                        />
                        <input
                            id="email"
                            name="email"
                            placeholder="Correo"
                            type="email"
                            value={email}
                            onChange={handleInputChange}
                        />
                    </div>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Mensaje"
                        rows="10"
                        value={message}
                        onChange={handleInputChange}
                    ></textarea>
                    <div className="center">
                        <button type="submit" disabled={state.submitting}>
                            Enviar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
