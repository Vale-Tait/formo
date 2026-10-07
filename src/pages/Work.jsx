import { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';
import styles from './Work.module.css';

function Work() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects =
    selectedCategory === 'All' ? projects : projects.filter(i => i.category === selectedCategory);

  return (
    <section className={styles.content}>
      <h1>Selected Works.</h1>
      <p>A collection of product explorations and creative studies.</p>

      <select
        id="category"
        name="category"
        value={selectedCategory}
        onChange={e => setSelectedCategory(e.target.value)}
      >
        <option value="All">All</option>
        <option value="Lighting">Lighting</option>
        <option value="Furniture">Furniture</option>
        <option value="Consumer Electronics">Consumer Electronics</option>
        <option value="Home Objects">Home Objects</option>
      </select>

      <ul style={{ listStyle: 'none', marginTop: '1rem' }}>
        {filteredProjects.map(project => (
          <li key={project.id}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Work;
