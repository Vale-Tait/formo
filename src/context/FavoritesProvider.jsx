import { useState, useEffect } from 'react';
import { FavoritesContext } from './FavoritesContext';

function FavoritesProvider({ children }) {
  const [favoriteIds, setFavoriteIds] = useState(() => {
    try {
      const saved = localStorage.getItem('formo-favorites');

      if (!saved) return [];

      const parsed = JSON.parse(saved);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('formo-favorites', JSON.stringify(favoriteIds));
  }, [favoriteIds]);

  function handleToggleFavorite(id) {
    setFavoriteIds(prev => (prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]));
  }

  return (
    <FavoritesContext value={{ favoriteIds, handleToggleFavorite }}>{children}</FavoritesContext>
  );
}

export default FavoritesProvider;
