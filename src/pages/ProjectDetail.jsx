import { useParams } from 'react-router';
import { projects } from '../data/projects';
import NotFound from './NotFound';

import { useFavorites } from '../context/FavoritesContext';
import styles from './ProjectDetail.module.css';

function ProjectDetail() {
  const { slug } = useParams();

  const project = projects.find(i => i.slug === slug);

  const { favoriteIds, handleToggleFavorite } = useFavorites();

  if (!project) return <NotFound />;

  const isFavorite = favoriteIds.includes(project.id);

  return (
    <section className={styles.content}>
      <div className={styles.sec}>
        <div className={styles.images}>
          {project.gallery.map((src, index) => (
            <img src={src} alt={`${project.title} detail ${index + 1}`} key={src} />
          ))}
        </div>
        <h1>{project.title}</h1>

        <p>
          {project.category} · {project.year}
        </p>

        <div className={styles.description}>
          <h2>{project.tagline}</h2>
          <p>{project.description}</p>
        </div>

        <button className={styles.btn} onClick={() => handleToggleFavorite(project.id)}>
          {isFavorite ? 'Remove favorite' : 'Add to favorite'}
        </button>
      </div>

      <img src={project.cover} alt={project.title} className={styles.imageA} />
    </section>
  );
}

export default ProjectDetail;
