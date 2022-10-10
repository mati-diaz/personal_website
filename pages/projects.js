import projects from '../assets/data/projects.json';
import { Project } from '../components/Project';
import styles from '../styles/pages/Projects.module.css';

export default function ProjectsPage() {
    return (
        <div>
            <h2 className="subtitle">Proyectos</h2>
            <div className={styles.projects}>
                {projects.map((project) => (
                    <Project
                        key={project.title}
                        title={project.title}
                        github={project.github}
                        image={project.img}
                        website={project.website}
                        technologies={project.stack}
                        description={project.description}
                    />
                ))}
            </div>
        </div>
    );
}
