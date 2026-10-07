import { Link } from 'react-router';
import { useFavorites } from '../context/FavoritesContext';
import styles from './ProjectCard.module.css';

function ProjectCard({ project }) {
  const { favoriteIds, handleToggleFavorite } = useFavorites();
  const isFavorite = favoriteIds.includes(project.id);

  return (
    <div className={styles.card}>
      <Link to={`/work/${project.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <div className={styles.cover}>
          <img src={project.cover} alt={project.title} />
          <h2>{project.title}</h2>
          <p>
            {project.category} · {project.year}
          </p>
        </div>
      </Link>

      <button className={styles.btn} onClick={() => handleToggleFavorite(project.id)}>
        {isFavorite ? 'Remove favorite' : 'Add to favorite'}
      </button>
    </div>
  );
}

export default ProjectCard;
