import Image from 'next/image';
import styles from '../styles/components/Project.module.css';
import github_logo from '../assets/images/icons/github.png';
import linkedin_logo from '../assets/images/icons/linkedin.png';

import blog_img from '../assets/images/projects/blogapp.png';
import lyrics_img from '../assets/images/projects/lyrics.png';
import nevicare_img from '../assets/images/projects/nevicare.png';
import portfolio_img from '../assets/images/projects/portfolio.png';

export const Project = ({
    title,
    github,
    website,
    image,
    description,
    technologies,
}) => {
    let projectImage = null;

    switch (image) {
        case 'blogapp':
            projectImage = blog_img;
            break;
        case 'nevicare':
            projectImage = nevicare_img;
            break;
        case 'lyrics':
            projectImage = lyrics_img;
            break;
        case 'portfolio':
            projectImage = portfolio_img;
            break;
    }

    return (
        <div className={styles.project}>
            {/* <img
                alt="project img"
                className={styles.project__img}
                src={'./img/' + projectImg + '.png'}
            /> */}
            <div className={styles.project__image}>
                <Image src={projectImage} layout='intrinsic' />
            </div>
            <div className={styles.project__info}>
                <h3>{title}</h3>
                <ul>
                    {technologies.map((technology) => (
                        <li key={technology}>{technology}</li>
                    ))}
                </ul>
                <p>{description}</p>
                <div className={styles.buttons}>
                    <a href={github} target="_blank" rel="noreferrer">
                        <Image src={github_logo} height={24} width={24} />
                        Repositorio
                    </a>
                    <a href={website} target="_blank" rel="noreferrer">
                        <Image src={linkedin_logo} height={24} width={24} />
                        Sitio Web
                    </a>
                </div>
            </div>
        </div>
    );
};
