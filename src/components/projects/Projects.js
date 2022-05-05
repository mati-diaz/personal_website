import { Project } from './Project';
import './projects.css';

export const Projects = () => {
    return (
        <div className='page'>
            <h2 className='subtitle'>Proyectos</h2>
            <div className='projects-content'>
                <div className='projects-container'>
                    <Project
                        title='BlogApp'
                        technologies={
                            ['react', 'sass', 'redux', 'node', 'mongo', 'express']
                        }
                        projectImg='blogapp'
                        description='Aplicación web que cuenta con autenticación de usuarios y subida de imagenes en AWS-S3. Los usuarios pueden tener sus propios blogs y crear publicaciones que luego pueden ser compartidas al público, además los usuarios pueden crear comentarios en las publicaciones de otras personas'
                        github='https://github.com/mati-diaz/blog-app-frontend'
                        website='https://blog-app-gold.vercel.app/'
                    />
                    <Project
                        title='Landing Page'
                        technologies={
                            ['html', 'css', 'js']
                        }
                        projectImg='nevicare'
                        description='Sitio web creado para practicar HTML, CSS y JavaScript, muestra la información de una tienda de chocolates ficticia.'
                        github='https://github.com/mati-diaz/Nevicare'
                        website='https://nevicare.vercel.app/'
                    />
                    <Project
                        title='Mi Portafolio'
                        technologies={
                            ['react', 'css', 'js']
                        }
                        projectImg='portfolio'
                        description='Mi sitio web personal, aqui publico los proyectos en los que trabajo, en constante actualización.'
                        github='https://github.com/mati-diaz/portfolio'
                        website='https://portfolio-mdr.vercel.app/'
                    />
                </div>
            </div>
        </div>
    )
}
