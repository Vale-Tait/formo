import { NavLink, Outlet, Link, ScrollRestoration } from 'react-router';

import { useFavorites } from '../context/FavoritesContext';
import styles from './RootLayout.module.css';
import { useState, useRef, useEffect } from 'react';

function RootLayout() {
  const { favoriteIds } = useFavorites();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const firstLinkRef = useRef(null);

  useEffect(() => {
    if (isMenuOpen) {
      firstLinkRef.current?.focus();
    }
  }, [isMenuOpen]);

  return (
    <div className={styles.body}>
      <Link to="/" className={styles.logo}>
        FORMO
      </Link>

      <header className={styles.header}>
        <div className={styles.menuButton} onClick={() => setIsMenuOpen(prev => !prev)}>
          {isMenuOpen ? 'Close' : 'Open'}
        </div>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
          <NavLink
            to="/"
            className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}
            onClick={() => setIsMenuOpen(false)}
            ref={firstLinkRef}
          >
            Home
          </NavLink>
          <NavLink
            to="/work"
            className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Work
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </NavLink>

          <span>Favorites: {favoriteIds.length}</span>
        </nav>
      </header>

      <main className={styles.main}>
        <Outlet />
      </main>

      <footer className={styles.footer}>FORMO</footer>
      <ScrollRestoration />
    </div>
  );
}

export default RootLayout;
