import Image from 'next/image';
import styles from '@/styles/Contact.module.css';
import { useState } from 'react';
import Layout from '@/components/Layout';

export default function Contact() {
    const [state, setState] = useState({
        fields: {
            name: '',
            email: '',
            message: '',
        },
        status: {
            success: undefined,
            loading: false,
        },
        missings: [],
    });

    const [status, setStatus] = useState({
        success: undefined,
        loading: false,
    });

    const handleInputChange = (e) => {
        setState({
            ...state,
            fields: {
                ...state.fields,
                [e.target.name]: e.target.value,
            },
            missings: e.target.value
                ? state.missings.filter((field) => field !== e.target.name)
                : state.missings,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setState({
            ...state,
            missings: [],
        });

        setStatus({
            ...status,
            loading: true,
        });

        for (let field in state.fields) {
            if (!state.fields[field]) {
                setState({
                    ...state,
                    missings: state.missings.push(field),
                });
            }
        }

        if (state.missings.length) {
            setState({
                ...state,
                missings: state.missings,
            });

            setStatus({
                ...status,
                loading: false,
            });

            return;
        }

        const res = await fetch('https://formspree.io/f/meqwbyel', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(state.fields),
        });

        if (res.ok) {
            setState({
                ...state,
                fields: {
                    name: '',
                    email: '',
                    message: '',
                },
            });

            setStatus({
                loading: false,
                success: true,
            });
        } else {
            setState({
                ...state,
                fields: {
                    name: '',
                    email: '',
                    message: '',
                },
            });

            setStatus({
                loading: false,
                success: false,
            });
        }

        setTimeout(() => {
            setStatus({
                ...status,
                success: undefined,
            });
        }, 3000);
    };

    const item = {
        hidden: { opacity: 0 },
        show: { opacity: 1 },
    };

    return (
        <Layout>
            <main className={styles.main}>
                <h1 className="title">Contacto</h1>

                <form
                    className={styles.form}
                    onSubmit={handleSubmit}
                >
                    <div className={styles.formField}>
                        <label htmlFor="name">Nombre</label>
                        <input
                            onChange={handleInputChange}
                            className={
                                state.missings &&
                                state.missings.includes('name')
                                    ? styles.missing
                                    : ''
                            }
                            value={state.fields.name}
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Nombre"
                        />
                    </div>

                    <div className={styles.formField}>
                        <label htmlFor="email">Email</label>
                        <input
                            onChange={handleInputChange}
                            className={
                                state.missings?.includes('email')
                                    ? styles.missing
                                    : ''
                            }
                            value={state.fields.email}
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email"
                        />
                    </div>

                    <div className={styles.formFieldText}>
                        <label htmlFor="message">Mensaje</label>
                        <textarea
                            onChange={handleInputChange}
                            className={
                                state.missings?.includes('message')
                                    ? styles.missing
                                    : ''
                            }
                            value={state.fields.message}
                            id="message"
                            name="message"
                            rows="5"
                            placeholder="Mensaje"
                        />
                    </div>

                    <div className={styles.footerForm}>
                        <button className={styles.submit} type="submit">
                            Enviar
                        </button>

                        {status.loading && (
                            <div className={styles.loading}>
                                <Image
                                    src="/images/icons/load.svg"
                                    alt="Loading"
                                    width={50}
                                    height={50}
                                />
                            </div>
                        )}

                        {status.success === true && (
                            <div className={styles.success}>
                                <Image
                                    src="/images/icons/done.svg"
                                    alt="Check"
                                    width={50}
                                    height={50}
                                />
                                <p>Mensaje Enviado</p>
                            </div>
                        )}

                        {status.success === false && (
                            <div className={styles.fail}>
                                <Image
                                    src="/images/icons/error.svg"
                                    alt="Fail"
                                    width={50}
                                    height={50}
                                />
                                <p>Error</p>
                            </div>
                        )}
                    </div>
                </form>
            </main>

            <section>
                <div className={styles.anothers}>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://github.com/mati-diaz/"
                    >
                        <div>
                            <Image
                                src="/images/socials/github.png"
                                alt="Github"
                                width={50}
                                height={50}
                            />
                            <p>GitHub</p>
                        </div>
                    </a>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.linkedin.com/in/mati-diaz/"
                    >
                        <div>
                            <Image
                                src="/images/socials/linkedin.png"
                                alt="Linkedin"
                                width={50}
                                height={50}
                            />
                            <p>Linkedin</p>
                        </div>
                    </a>

                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="mailto:matias.dzrz@gmail.com"
                    >
                        <div>
                            <Image
                                src="/images/socials/mail.png"
                                alt="Email"
                                width={50}
                                height={50}
                            />
                            <p>Correo</p>
                        </div>
                    </a>
                </div>
            </section>
        </Layout>
    );
}
