import styles from './Home.module.css';
import { Link } from 'react-router';
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';

const selectedProjects = projects.slice(0, 2);

function Home() {
  return (
    <>
      <div className={styles.hero}>
        <div>
          <h1>Objects for a calmer everyday.</h1>
          <p>FORMO explores everyday objects through proportion, material and use.</p>
        </div>
        <Link to="work" className={styles.cta}>
          <div className={styles.linkBox}>
            <div>View all projects</div>
            <div className={styles.underline}></div>
          </div>
        </Link>
      </div>

      <section>
        <h2>Selected Work</h2>
        <ul style={{ listStyle: 'none', marginTop: '1rem' }}>
          {selectedProjects.map(project => (
            <li key={project.id}>
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default Home;
