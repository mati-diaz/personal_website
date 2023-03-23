import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Contact.module.css';
import ScrollToTop from '@/components/ScrollToTop';

export default function Contact() {
    return (
        <>
            <ScrollToTop />

            <Head>
                <title>Matias Diaz - Contact</title>
            </Head>

            <main className={styles.main}>
                <h1 className="title">Contacto</h1>

                <form className={styles.form}>
                    <div className={styles.formField}>
                        <label htmlFor="name">Nombre</label>
                        <input type="text" id="name" name="name" placeholder='Nombre' />
                    </div>

                    <div className={styles.formField}>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" placeholder='Email' />
                    </div>

                    <div className={styles.formFieldText}>
                        <label htmlFor="message">Mensaje</label>
                        <textarea id="message" name="message" rows="5" placeholder='Mensaje' />
                    </div>

                    <button className={styles.submit} type='submit'>Enviar</button>
                </form>
            </main>

            <section>
                <h3 className='subtitle'>Otras vias de contacto</h3>
                
                <div className={styles.anothers}>
                    <div>
                        <Image src='/socials/github.png' alt='Github' width={50} height={50} />
                        <p>GitHub</p>
                    </div>
                    <div>
                        <Image src='/socials/linkedin.png' alt='Linkedin' width={50} height={50} />
                        <p>Linkedin</p>
                    </div>
                    <div>
                        <Image src='/socials/mail.png' alt='Email' width={50} height={50} />
                        <p>Correo</p>
                    </div>
                </div>
            </section>
        </>
    );
}
